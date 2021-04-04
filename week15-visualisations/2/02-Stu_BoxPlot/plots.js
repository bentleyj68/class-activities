// @TODO: YOUR CODE HERE

// Create a trace object with the data in `y0`
var trace1 = {
  y: temps.newyork,
  boxpoints: "all",
  type: "box",
  name: "New York"
};

// Create a trace object with the data in `y1`
var trace2 = {
  y: temps.houston,
  boxpoints: "all",
  type: "box",
  name: "Houston"
};

// Create a data array with the above two traces
var data = [trace1, trace2];

// Use `layout` to define a title
var layout = {
  title: "Basic Box Plot"
};

// Render the plot to the `plot1` div
Plotly.newPlot("plot", data, layout);
