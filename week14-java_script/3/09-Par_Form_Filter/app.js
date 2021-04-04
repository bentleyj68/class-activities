// Assign the data from `data.js` to a descriptive variable
var people = data;

// Select the button
var button = d3.select("#button");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#patient-form-input");
  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  // Use the form input to filter the data by blood type
  var filteredData = data.filter(selectedData);
  console.log(filteredData[1]);
  // BONUS: Calculate summary statistics for the age field of the filtered data

  // First, create an array with just the age values

  // Next, use math.js to calculate the mean, median, mode, var, and std of the ages

  // Finally, add the summary stats to the `ul` tag
};
