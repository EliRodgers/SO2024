const fs = require("fs").promises;
const path = require("path");
const process = require("process");
const { google } = require("googleapis");
import { eventMap } from "./utils";
import { cache } from "react";

// Sheets Authentication Environment Variables
const ADMIN_SPREADSHEET_ID = process.env.ADMIN_SPREADSHEET_ID;
const COMPETITORS_TAB = process.env.COMPETITORS_TAB;
const SCHEDULE_TAB = process.env.SCHEDULE_TAB;
const SERVICE_ACCOUNT = process.env.SERVICE_ACCOUNT;

// Competitor Tab Headers
const ID = 0;
const FIRST_NAME = 1;
const LAST_NAME = 2;
const LEVEL = 3;
const GENDER = 4;
const SCHOOL = 6;
const EVENT_START = 9;

// Schedule Tab Headers
const RING1 = 0;
const RING2 = 1;
const RING3 = 2;

const experience = (level: string) => {
  switch (level) {
    case "B":
      return "Beginner";
    case "I":
      return "Intermediate";
    case "A":
      return "Advanced";
  }
};

const events = (competitor: string[]) => {
  const eventCodes = competitor.splice(
    EVENT_START,
    competitor.length - EVENT_START + 1
  );
  return eventCodes.map((eventCode) => eventMap.get(+eventCode));
};

export const createAuthClient = () => {
  // Get JWT Token to access sheet
  const service_account = JSON.parse(SERVICE_ACCOUNT);
  const jwtClient = new google.auth.JWT(
    service_account.client_email,
    "",
    service_account.private_key,
    ["https://www.googleapis.com/auth/spreadsheets"]
  );
  jwtClient.authorize(function (err: any) {
    if (err) {
      throw err;
    }
  });
  return jwtClient;
};

export const getCompetitorList = cache(async () => {
  console.log("Fetcing competitor list.");
  try {
    const sheets = google.sheets({ version: "v4" });
    const response = await sheets.spreadsheets.values.get({
      auth: createAuthClient(),
      spreadsheetId: ADMIN_SPREADSHEET_ID,
      range: COMPETITORS_TAB,
    });
    const rows = response?.data.values;
    if (!rows || rows.length == 0) {
      console.log("Error: no data found");
      return [];
    }
    rows.shift();
    const competitors = rows.map((competitor: string[]) => ({
      id: competitor[ID],
      name: competitor[FIRST_NAME] + " " + competitor[LAST_NAME],
      experience: experience(competitor[LEVEL]),
      gender: competitor[GENDER],
      school: competitor[SCHOOL],
      events: events(competitor),
    }));
    console.log("Successfully fetched competitor list.");
    return competitors;
  } catch (err) {
    console.log(err);
  }
  return [];
});

export const getRingSchedules = cache(async () => {
  try {
    const sheets = google.sheets({ version: "v4" });
    const response = await sheets.spreadsheets.values.get({
      auth: createAuthClient(),
      spreadsheetId: process.env.ADMIN_SPREADSHEET_ID,
      range: SCHEDULE_TAB + "!A2:C40", // sheet name
      majorDimension: "COLUMNS",
    });
    const events = response?.data.values;
    return events;
  } catch (err) {
    console.log(err);
  }
  return [];
});
