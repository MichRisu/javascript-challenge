// Assign the data from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the sightings data from data.js
console.log(tableData);

// Basic:
    // Create a function to append a table to the HTML page and adds new 
    // rows of data for each UFO sighting
    // data.forEach(function(sightingReport) {
    //     console.log(sightingReport);
    //     var row = tbody.append("tr");

    //     Object.entries(sightingReport).forEach(function([key, value]) {
    //         console.log(key, value);
    //         var cell = row.append("td");
    //         cell.text(value);
    //     });
    // });

// Advanced using arrow function:
// Create a function to append a table to HTML page
tableData.forEach((report) => {
    // Append new rows to tbody
    var row = tbody.append("tr");

    // Use Object to access key, value pairs and append to the newly created rows
    Object.entries(report).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form");

// Create event handlers
button.on("click", runEnter);
form.on("submit", runEnter);

// Create the function to run for both events
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select(".form-control");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

        //  Filter the data using datetime
        var filtered = tableData.filter(sighting => sighting.datetime === inputValue);

        //  Have to clear out displayed table to create a new one
        tbody.html("");

        // Use if/else to handle dates not in the table; if date matches, create a new table for display
        if (filtered.length === 0) {
            tbody.text(`No UFO sightings logged for date entered.`);
        } else {
            filtered.forEach((sighting) => {
                var row = tbody.append("tr");
                Object.entries(sighting).forEach(([key, value]) => {
                    var cell = row.append("td");
                    cell.text(value);
                });
            });
        };
};