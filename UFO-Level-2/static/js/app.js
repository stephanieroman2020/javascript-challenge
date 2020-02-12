
var tableData = data;

var $tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var inputFieldDate = d3.select("#datetime");
var inputFieldCity = d3.select("#city");


var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

var addData = (dataInput) => {
    dataInput.forEach(ufoSightings => {
        var row = $tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufoSightings[column])
        )
    });
}

addData(tableData);

button.on("click", () => {

    d3.event.preventDefault();
    

    var inputDate = inputFieldDate.property("value").trim();
   
    var inputCity = inputFieldCity.property("value").toLowerCase().trim();
 
    

    var filterDate = tableData.filter(tableData => tableData.datetime === inputDate);

    var filterCity = tableData.filter(tableData => tableData.city === inputCity);
    
    var filterCombinedData = tableData.filter(tableData => tableData.datetime === inputDate && tableData.city === inputCity);
   

    $tbody.html("");

    let response = {
        filterDate, filterCity, filterCombinedData
    }

    if(response.filterCombinedData.length !== 0) {
        addData(filterCombinedData);
    }

  
        else if(response.filterCombinedData.length === 0 && ((response.filterDate.length !== 0 || response.filterCity.length !== 0))) {
            addData(filterDate) || addData(filterCity);
        }


        else {
            $tbody.append("tr").append("td").text("No Sightings Here...Move On...");
        }
})

