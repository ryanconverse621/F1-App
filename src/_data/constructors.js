const EleventyFetch = require("@11ty/eleventy-fetch");

async function getConstructorsStandings() {
    const url = "http://ergast.com/api/f1/2024/constructorStandings.json";
    const response = await EleventyFetch(url, {
        duration: "1d",
        type: "json"
    });
    const constructors = response.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
    return constructors;
}

module.exports = getConstructorsStandings;
