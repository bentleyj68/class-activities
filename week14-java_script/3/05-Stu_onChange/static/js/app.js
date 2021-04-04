// grab references to the input element and the output div
// @TODO: YOUR CODE HERE
var inputField = d3.select("#text");
var outputField = d3.select(".output");

// Function to reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Function to handle input change
function handleChange(event) {
  // grab the value of the input field
  // @TODO: YOUR CODE HERE
  var newText = d3.event.target.value;
  
  // clear the existing output
  // @TODO: YOUR CODE HERE
  outputField.text("");
  // reverse the input string
  // @TODO: YOUR CODE HERE
  var reversed_String = reverseString(newText);

  // Set the output text to the reversed input string
  // @TODO: YOUR CODE HERE
  outputField.text(reversed_String);
}

// Attach an event to detect changes to the input field.
// @TODO: YOUR CODE HERE
inputField.on("change", handleChange);

