export const competitors = [
  {
    id: 1,
    name: "Competitor 1",
    school: "UCLA",
    experience: "Beginner",
    gender: "Male",
  },
  {
    id: 2,
    name: "Competitor 2",
    school: "USC",
    experience: "Advanced",
    gender: "Female",
  },
];

export const events = [
  {
    id: "AMA101",
    competitors: [
      { name: "", place: "" },
      { name: "", place: "" },
    ],
  },
];

export const teams = [
  {
    id: "",
    totalscore: "",
    competitors: [],
  },
];

//EVENT competitors array is an array of their name, place, final score, score 1-5
//TEAM competitors array is an array of their name, top 2 events, contributing score
