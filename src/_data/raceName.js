const EleventyFetch = require("@11ty/eleventy-fetch");

async function getCircuit() {
    const url = "http://ergast.com/api/f1/current/last/circuits.json";
    const response = await EleventyFetch(url, {
        duration: "1d",
        type: "json"
    });
    // Correct path to access the first circuit's name
    const circuit = response.MRData.CircuitTable.Circuits[0];
    return circuit;
}

module.exports = getCircuit;
