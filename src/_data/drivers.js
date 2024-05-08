const EleventyFetch = require("@11ty/eleventy-fetch");

async function getDriversStandings(year) {
    const url = `http://ergast.com/api/f1/2024/driverStandings.json`;
    const response = await EleventyFetch(url, {
        duration: "1d", 
        type: "json"
    });
    const drivers = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    return drivers;
}

module.exports = getDriversStandings;

