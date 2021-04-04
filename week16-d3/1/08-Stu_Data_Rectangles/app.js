// Data which we will be using to build our rectangle
var booksReadThisYear = [15];

// Append the SVG wrapper to the page, set its height and width, and create a variable which references it
var svg = d3.select("body").append("svg");

svg.attr("width", "100px").attr("height", "100px");

// Append a rectangle and set its height in relation to the booksReadThisYear value

var rectangle = svg.selectAll("rect");

var rValues = [0, 0, 50, booksReadThisYear(0)];

circles.data(rValues)
    .enter()
    .append("rect")
    .attr("x", 50)
    .attr("y", 50)
    .attr("width", 50)
    .attr("height", 50)
    .attr("stroke", "black")
    .attr("stroke-width", "5")
    .attr("fill", "red");