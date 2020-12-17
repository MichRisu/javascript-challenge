// Assign the data from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the sightings data from data.js
console.log(data);

// Create a function to append a table to the HTML page and adds new 
// rows of data for each UFO sighting
data.forEach(function(sightingReport) {
    console.log(sightingReport);
    var row = tbody.append("tr");

    Object.entries(sightingReport).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});

