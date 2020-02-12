
var tableData = data;


console.log(tableData);


var $tbody = d3.select("tbody");

var date = d3.select("#datetime");


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
    

    var filterDate = tableData.filter(tableData => tableData.datetime === inputDate);

    var filterCity = tableData.filter(tableData => tableData.city === inputCity);


    $tbody.html("");

    let response = {
        filterDate, filterCity
    }

    if(response.filterDate.length !== 0) {
        addData(filterDate);
    }
  
    if(response.filterCity.length !== 0 || response.filterDate.length !== 0) {
        addData(filterCity) || addData(filterDate);
    }

    else {
        $tbody.append("tr").append("td").text("No Sightings Here...Move On...");
    }
});

