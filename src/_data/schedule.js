const EleventyFetch = require("@11ty/eleventy-fetch");

async function getSchedule() {
    const url = "http://ergast.com/api/f1/current.json";
    const response = await EleventyFetch(url, {
        duration: "1d",
        type: "json"
    });
    // Correct path to access the results of the last race
    const schedule = response.MRData.RaceTable.Races;
    return schedule;
}

module.exports = getSchedule;