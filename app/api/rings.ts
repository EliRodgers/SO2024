import { isUndefined } from "util";
import { createAuthClient } from "./sheets";
import next from "next";
import { cache } from "react";

const fs = require("fs").promises;
const path = require("path");
const process = require("process");
const { google } = require("googleapis");

const RING1 = 0;
const RING2 = 1;
const RING3 = 2;

const RING1_SPREADSHEET_ID = process.env.RING1_SPREADSHEET_ID;
const RING2_SPREADSHEET_ID = process.env.RING2_SPREADSHEET_ID;
const RING3_SPREADSHEET_ID = process.env.RING3_SPREADSHEET_ID;

// Event Tab Headers
const ID = 0;
const FIRST_NAME = 1;
const LAST_NAME = 2;
const SCHOOL = 3;
const TEAM = 4;
const PLACE = 5;
const FINAL_SCORE = 7;
const TIME = 8;
const SCORE1 = 9;
const SCORE2 = 10;
const SCORE3 = 11;
const SCORE4 = 12;
const SCORE5 = 13;

// Groupset Tab Headers
const GROUPSET_ID = 0;
const GROUPSET_TEAM = 1;
const GROUPSET_PLACE = 2;
const GROUPSET_FINAL_SCORE = 3;
const GROUPSET_TIME = 4;
const GROUPSET_EVENT_ID = "NAN901";

const batchGetRingCompetitors = cache(
  async (eventIds: string[], ring: number) => {
    const sheets = google.sheets({ version: "v4" });
    let sheetId = "";
    switch (ring) {
      case RING1:
        sheetId = RING1_SPREADSHEET_ID;
        break;
      case RING2:
        sheetId = RING2_SPREADSHEET_ID;
        break;
      case RING3:
        sheetId = RING3_SPREADSHEET_ID;
        break;
      default:
        throw new Error("Invalid Ring ID");
    }
    const eventRanges = eventIds.map((eventId) => {
      return eventId + "!A3:T40";
    });
    const response = await sheets.spreadsheets.values.batchGet({
      auth: createAuthClient(),
      spreadsheetId: sheetId,
      ranges: eventRanges, //sheet names
    });
    const eventsWithCompetitorsObjects = response?.data.valueRanges;
    const eventsWithCompetitors = new Map<string, string[]>();
    eventIds.forEach((eventId, index) => {
      if (eventId === GROUPSET_EVENT_ID) {
        eventsWithCompetitors.set(
          eventId,
          eventsWithCompetitorsObjects[index].values.map(
            (competitor: string[]) => ({
              id: competitor[GROUPSET_ID],
              name: competitor[GROUPSET_TEAM],
              place: competitor[GROUPSET_PLACE],
              "final score": competitor[GROUPSET_FINAL_SCORE],
              time: competitor[GROUPSET_TIME],
            })
          )
        );
      } else {
        eventsWithCompetitors.set(
          eventId,
          eventsWithCompetitorsObjects[index].values.map(
            (competitor: string[]) => ({
              id: competitor[ID],
              name: competitor[FIRST_NAME] + " " + competitor[LAST_NAME],
              school: competitor[SCHOOL],
              team: competitor[TEAM],
              place: competitor[PLACE],
              "final score": competitor[FINAL_SCORE],
              time: competitor[TIME],
              scores: [
                competitor[SCORE1],
                competitor[SCORE2],
                competitor[SCORE3],
                competitor[SCORE4],
                competitor[SCORE5],
              ],
            })
          )
        );
      }
    });
    return eventsWithCompetitors;
  }
);

// TODO: Name this better
export const getAllEventCompetitors = cache(async (rings: string[][]) => {
  try {
    const ringsWithCompetitorsPromises = rings.map(async (events, index) => {
      return await batchGetRingCompetitors(events, index);
    });
    let allEventsWithCompetitors = new Map<string, string[]>();
    await Promise.allSettled(ringsWithCompetitorsPromises).then((rings) => {
      rings.forEach((events) => {
        //@ts-ignore
        events.value.forEach((eventId, key) => {
          allEventsWithCompetitors.set(key, eventId);
        });
      });
    });
    return allEventsWithCompetitors;
  } catch (err) {
    console.log(err);
  }
});

// TODO: Make types for competitors
function isEventDone(competitorList: any) {
  // TODO: Surely this can be written better bro
  if (
    competitorList.find((competitor: any) => {
      return (
        competitor["final score"] === undefined ||
        competitor["final score"] === "#NAME?"
      );
    }) === undefined
  ) {
    return true;
  }
  return false;
}

// TODO: Need typing LOL
function getNextThreeCompetitors(competitorList: any[]) {
  let nextThreeCompetitors: any[] = [];
  let n = 3;
  for (var i = 0; i < competitorList.length; i++) {
    if (n === 0) {
      break;
    }
    if (
      competitorList[i]["final score"] === undefined ||
      competitorList[i]["final score"] === "#NAME?"
    ) {
      nextThreeCompetitors = [...nextThreeCompetitors, competitorList[i].name];
      n = n - 1;
    }
  }

  return nextThreeCompetitors;
}

// TODO: Probably want to get all events from one call when we first get to the site
export const getCurrentEvents = async (rings: string[][]) => {
  try {
    const ringsWithCompetitorsPromises = rings.map(async (events, index) => {
      return await batchGetRingCompetitors(events, index);
    });
    let allEventsWithCompetitors = new Map<string, string[]>();
    await Promise.allSettled(ringsWithCompetitorsPromises).then((rings) => {
      rings.forEach((events) => {
        //@ts-ignore
        events.value.forEach((eventId, key) => {
          allEventsWithCompetitors.set(key, eventId);
        });
      });
    });

    const currentEvents = rings.map((events) => {
      return events.find(
        (event) => !isEventDone(allEventsWithCompetitors.get(event))
      );
    });

    const nextCompetitors = currentEvents.map((event) => {
      if (event === undefined) {
        return [];
      }
      return getNextThreeCompetitors(allEventsWithCompetitors.get(event)!);
    });

    const currentEventsWithNextCompetitors = currentEvents.map(
      (event, index) => ({
        eventId: event,
        current: nextCompetitors[index][0],
        "up next": nextCompetitors[index][1],
        "on deck": nextCompetitors[index][2],
      })
    );
    return currentEventsWithNextCompetitors;
  } catch (err) {
    console.log(err);
  }
};
