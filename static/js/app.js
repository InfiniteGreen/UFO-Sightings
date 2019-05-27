// from data.js
var tableData = data;

// Create empty arrays to store the info
var date = [];
var city = [];
// var state = [];
// var country = [];
// var shape = [];
// var durationMinutes = [];
// var comments = []


// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var date_input = d3.select("#datetime");
  var city_input = d3.select("#city");


  // Get the value property of the input element - Date
  if (date_input.property("value") != ""){
    date = date_input.property("value");
  }
  else {
    date = date_input.property("placeholder");
  };
  // Get the value property of the input element - City
  if (city_input.property("value") != ""){
    city = city_input.property("value").trim().toLowerCase();
  }
  else {
    city = city_input.property("placeholder");
  };

  // console.log(date);
  // console.log(tableData);
  // console.log(city);


  // Create an array with the filtered values
  // var filteredData = tableData.filter(sighting => sighting.datetime === date);
  var filteredData = tableData.filter(sighting => {
    if(sighting.datetime === date){
        return true;
    }
    else if (sighting.city === city){
      return true;
    }    
    // else {
    //   console.log("No Match Found!");
    //   retrun false;
    // }    
  });


   console.log(filteredData);

// renderTable renders the filteredData to the tbody
function renderTable() {

  var tbody = d3.select("tbody");
          
  tbody.html("");  

  // Iterate through each fileteredData and pend to table
  filteredData.forEach(sighting => {
    
    var tbl_col = Object.keys(sighting);

    // console.log(tbl_col);

    var row = tbody.append("tr");

    tbl_col.forEach(s_info => {
      row.append("td").text(sighting[s_info]);     
    // console.log(sighting);
    // console.log(tbl_col);
    // console.log(s_info);
    });  
  });
};

// // Render the table for the first time on page load
renderTable();
});
