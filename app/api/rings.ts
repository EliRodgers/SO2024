import { createAuthClient } from "./sheets";

const fs = require('fs').promises;
const path = require('path');
const process = require('process');
const {google} = require('googleapis');

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

async function getEventCompetitors(event : string, ring : number) {
    try { 
        const sheets = google.sheets({ version: 'v4'});
        let sheetId = "";
        switch(ring) {
            case RING1:
                sheetId = RING1_SPREADSHEET_ID
                break;
            case RING2:
                sheetId = RING2_SPREADSHEET_ID
                break;
            case RING3:
                sheetId = RING3_SPREADSHEET_ID
                break;
            default:
                throw new Error("Invalid Ring ID")
        }
        const response = await sheets.spreadsheets.values.get({
            auth: createAuthClient(),
            spreadsheetId: sheetId,
            range: event + "!A3:T40", // sheet name
        });
        const rows = response?.data.values
        const competitors = rows.map((competitor : string[]) => (
            {
                id: competitor[ID],
                name: competitor[FIRST_NAME] + " " + competitor[LAST_NAME],
                school: competitor[SCHOOL],
                team: competitor[TEAM], 
                place: competitor[PLACE],
                final_score: competitor[FINAL_SCORE],
                time: competitor[TIME],
                scores: [competitor[SCORE1], competitor[SCORE2], competitor[SCORE3], competitor[SCORE4], competitor[SCORE5]]
            }
        ))
        return competitors
    } catch (err) {
        console.log(err);
    }
}

async function getRingCompetitors(eventIds : string[], ring : number) {
    const eventsWithCompetitorsPromises = 
        eventIds.map(async (event) => {
            return await getEventCompetitors(event, ring)
        })
    let eventsWithCompetitors = new Map<string, string[]>();
    await Promise.allSettled(eventsWithCompetitorsPromises).then((events) => {
        events.map((event, index) => {
            //@ts-ignore
            eventsWithCompetitors.set(eventIds[index], event.value)
        })
    })
    return eventsWithCompetitors
}

export async function getAllEventCompetitors(rings : string[][]) {
    try {
        const ringsWithCompetitorsPromises = rings.map(async (events, index) => {
            return await getRingCompetitors(events, index)
        })
        let allEventsWithCompetitors = new Map<string, string[]>();
        await Promise.allSettled(ringsWithCompetitorsPromises).then((rings) => {
            rings.forEach((events) => {
                //@ts-ignore
                events.value.forEach((eventId, key) => {
                    allEventsWithCompetitors.set(key, eventId)
                })
            })
        })
        return allEventsWithCompetitors
    } catch (err) {
        console.log(err);
    }
}
