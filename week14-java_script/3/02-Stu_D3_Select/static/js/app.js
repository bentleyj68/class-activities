// The new student and grade to add to the table
var newGrade = ["Wash", 79];

// Use D3 to select the table
// Select the text of an HTML element
var table1 = d3.select("table");

// Use d3 to create a bootstrap striped table
// http://getbootstrap.com/docs/3.3/css/#tables-striped
table1.attr("class", "table table-striped");

// Use D3 to select the table body
var tableBody = d3.select("tbody");

// Append one table row `tr` to the table body
var row = tableBody.append('tr');
// Append one cell for the student name
row.append('td').text(newGrade[0]);
// Append one cell for the student grade
row.append('td').text(newGrade[1]);