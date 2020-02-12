// from data.js
var tableData = data;

// YOUR CODE HERE!

// // -------------------- [LEVEL 1] --------------------
// * Create a basic HTML web page or use the [index.html](StarterCode/index.html) 
// file provided (we recommend building your own custom page!).

// Using the provided HTML web page [indexedDB.html]

// // -------------------- [LEVEL 2 - 1] --------------------
// * Using the UFO dataset provided in the form of an array of JavaScript objects, 
// write code that appends a table to your web page and then adds new rows of data for each UFO sighting.

// Testing to make sure data.js is working in the console in the HTML page
// console.log(data);
console.log(tableData);

// Data should appear in the tbody (where the colums are); 
// create a reference for tbody

var $tbody = d3.select("tbody");
// console.log($tbody);


// // ---------------------------- [TESTING OUT SEVERAL CODES] ----------------------------
// // Getting the data in data.js into the HTML Server Console 
// // Getting the objects (appending to "tr"), getting values using Object.entries

// tableData.forEach(function(test){
//     console.log(test);
//     var row = $tbody.append("tr");

//     Object.entries(test).forEach(function([key, value]){
//         console.log(key,value);
//     });
// });

// // Using d3 to append 1 cell per data value
// tableData.forEach(function(test){
//     console.log(test);
//     var row = $tbody.append("tr");

//     Object.entries(test).forEach(function([key, value]){
//         console.log(key,value);
//         var cell = row.append("td");
//     });
// });

// // Using d3 to update each cell's text with values from data.js
// tableData.forEach(function(test){
//     console.log(test);
//     var row = $tbody.append("tr");

//     Object.entries(test).forEach(function([key, value]){
//         console.log(key,value);
//         var cell = row.append("td");
//         cell.text(value);
//     });
// });

// // Using d3 to update each cell's text with values from data.js
// tableData.forEach(function(test){
//     console.log(test);
//     var row = $tbody.append("tr");

//     Object.entries(test).forEach(function([key, value]){
//         console.log(key,value);
//         var cell = row.append("td");
//         cell.text(value);
//     });
// });

// // Refactoring to use Arrow Functions:
// tableData.forEach((test) => {
//     var row = $tbody.append("tr");
//     Object.entries(test).forEach(([key, value]) => {
//         var cell = row.append("td");
//         cell.text(value);
//     });
// });


// -------------------- [LEVEL 2 - 2] --------------------
//   * Make sure you have a column for `date/time`, `city`, `state`, `country`, `shape`, 
// and `comment` at the very least.

var date = d3.select("#datetime");
// console.log(date);

var city = d3.select("#city");
var state = d3.select("#state");
var country = d3.select("#country");
var shape = d3.select("#shape");
var  duration = d3.select("#durationMinutes");
var comments = d3.select("#comments");

var button = d3.select("#filter-btn");

var inputField = d3.select("#datetime");

var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]
console.log(columns);

var inputFieldCity = d3.select("#city");

// -------------------- [LEVEL 2 - 3] --------------------
// * Use a date form in your HTML document and write JavaScript code that will listen for events 
// and search through the `date/time` column to find rows that match user input.


// // ---------------------------- [TESTING OUT SEVERAL CODES] ----------------------------
// // ---------------------------- [EVENT LISTENERS -- BUTTON] ----------------------------

// // Reference the button and input element on the page with the id property
// var button = d3.select("#filter-btn");

// var inputField = d3.select("#datetime");

// // Create a trigger to test the button when it's clicked
// function testClick() {
//     console.log("Button Test!");
    
//     console.log(d3.event.target);
// }

// button.on("click", testClick);

// Define the click handler inline 
// button.on("click", function() {
//     console.log("Button Test 2!");
//     console.log(d3.event.target);
// });

// // Event Handlers that can do anything -- Filter from the data.js here?
// button.on("click", function() {
//     d3.select("#ufo-table").html(tableData);
// })

// inputField.on("change", function(){
//     var newText = d3.event.target.value;
//     console.log(newText);
// });

var addData = (dataInput) => {
    dataInput.forEach(ufoSightings => {
        var row = $tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufoSightings[column])
        )
    });
}

addData(tableData);

button.on("click", () =>{
    d3.event.preventDefault();
    var inputDate = inputField.property("value").trim();
    var inputCity = inputFieldCity.property("value").trim();
    
    // // Creating a filter for said values
    var filterDate = tableData.filter(tableData => tableData.datetime === inputDate);
    // console.log(filterDate)
    var filterCity = tableData.filter(tableData => tableData.city === inputCity);
    // console.log(filterCity)

    $tbody.html("");

    // let response = {
    //     filterDate
    // }

    // // Adding the City Filter
    // // Logical Operators in JS: (||) = OR
    // // Logical Operators in JS: ((&&) = AND
    // // Logical Operators in JS: ((!) = NOT
    let response = {
        filterDate, filterCity
    }

    if(response.filterDate.length !== 0) {
        addData(filterDate);
    }
    // else if(response.filterCity.length !== 0){
    //     addData(filterCity);
    // }
    if(response.filterCity.length !== 0 || response.filterDate.length !== 0) {
        addData(filterCity) || addData(filterDate);
    }

    else {
        $tbody.append("tr").append("td").text("No Sightings Here...Move On...");
    }
});

