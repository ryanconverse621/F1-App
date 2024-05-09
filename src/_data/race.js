const EleventyFetch = require("@11ty/eleventy-fetch");

async function getRaceResults() {
    const url = "http://ergast.com/api/f1/current/last/results.json";
    const response = await EleventyFetch(url, {
        duration: "1d",
        type: "json"
    });
    // Correct path to access the results of the last race
    const raceresults = response.MRData.RaceTable.Races[0].Results;
    return raceresults;
}

module.exports = getRaceResults;