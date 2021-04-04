// @TODO: YOUR CODE HERE
var trace = {
    y: data.survival.map(val => Math.sqrt(val)),
    x: data.organ,
    // boxpoints: "all",
    type: "box",
    name: "Cancer Survival"
};

var data = [trace];

var layout = {
    title: "Basic Box Plot"
  };

Plotly.newPlot("plot", data, layout);