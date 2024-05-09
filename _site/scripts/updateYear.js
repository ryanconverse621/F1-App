// // document.addEventListener('DOMContentLoaded', function() {
// //     const yearButton = document.getElementById('yearButton');
// //     const yearLinks = document.querySelectorAll('.dropdown-year');

// //     yearLinks.forEach(link => {
// //         link.addEventListener('click', function() {
// //             yearButton.textContent = this.textContent; // Updates the button's text to the selected year
// //         });
// //     });
// // });


// document.addEventListener('DOMContentLoaded', function() {
//     const yearButton = document.getElementById('yearButton');
//     const yearLinks = document.querySelectorAll('.dropdown-year');

//     yearLinks.forEach(link => {
//         link.addEventListener('click', function() {
//             yearButton.textContent = this.textContent; // Updates the button's text to the selected year
//             fetchDriverStandings(this.textContent); // Fetch new data for the selected year
//         });
//     });

//     function fetchDriverStandings(year) {
//         fetch(`http://ergast.com/api/f1/${year}/driverStandings.json`)
//             .then(response => response.json())
//             .then(data => {
//                 updateDriverStandings(data);
//             })
//             .catch(error => console.error('Error fetching driver standings:', error));
//     }

//     function updateDriverStandings(data) {
//         const standingsList = document.querySelector('.drivers-standings-list');
//         standingsList.innerHTML = ''; // Clear existing list
    
//         // Assuming data structure includes nested objects as commonly returned in APIs
//         const drivers = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
//         drivers.forEach(driver => {
//             const listItem = document.createElement('li');
//             listItem.textContent = `${driver.position} - ${driver.Driver.givenName} ${driver.Driver.familyName} (${driver.Driver.nationality}) - ${driver.Constructors[0].name} - ${driver.points} Points - ${driver.wins} Wins`;
//             standingsList.appendChild(listItem);
//         });
//     }
    
// });



