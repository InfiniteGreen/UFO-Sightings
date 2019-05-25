// from data.js
var tableData = data;

// Get references to the tbody element, input field and button
// var $tbody = document.querySelector("tbody");
// var $dateInput = document.querySelector("#date");
// var $cityInput = document.querySelector("#city");
// var $stateInput = document.querySelector("#state");
// var $countryInput = document.querySelector("#country");
// var $shapeInput = document.querySelector("#shape");
// var $searchBtn = document.querySelector("#search");
// var $resetBtn = document.querySelector("#reset");

// Create empty arrays to store the info
// var date = [];
// var city = [];
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
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element  

  if (inputElement.property("value") != ""){
    date = inputElement.property("value");
  }
  else {
    date = inputElement.property("placeholder");
  }

  // console.log(date);
  //console.log(tableData);

  // Create an array with the filtered values
  var filteredData = tableData.filter(sighting => sighting.datetime === date);
   

   console.log(filteredData);

//   // BONUS: Calculate summary statistics for the age field of the filtered data

//   // First, create an array with just the age values
//   var ages = filteredData.map(person => person.age);

// renderTable renders the filteredData to the tbody
// function renderTable() {
//     $tbody.innerHTML = "";
//     for (var i = 0; i < filteredData.length; i++) {
//       // Get get the current data object and its fields
//       var data = filteredData[i];
//       var fields = Object.keys(data);
//       // Create a new row in the tbody, set the index to be i + startingIndex
//       var $row = $tbody.insertRow(i);
//       for (var j = 0; j < fields.length; j++) {
//         // For every field in the data object, create a new cell at set its inner text to be the current value at the current address's field
//         var field = fields[j];
//         var $cell = $row.insertCell(j);
//         $cell.innerText = data[field];
//       }
//     }
//   }

// Iterate through each fileteredData and pend to table
function renderTable() {

  var tbody = d3.select("tbody");
          
  tbody.html("");    

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

// function resetData() {
//   filteredData = dataSet;
//   $dateInput.value = "";
//   $cityInput.value = "";
//   $stateInput.value = "";
//   $countryInput.value = "";
//   $shapeInput.value = "";
//   renderTable();
// }

// function resetForm() {
//   document.getElementById("myForm").reset();
// }

// // Render the table for the first time on page load
renderTable();
});
