// Create an array of each country's numbers
var us = Object.values(data.us);
var uk = Object.values(data.uk);
var canada = Object.values(data.canada);

// @ADD YOUR CODE HERE

var labels = Object.keys(data.us);

function init() {
    var data = {
        values: us,
        labels: labels,
        type: 'pie'
    };

    var layout = {
        height: 400,
        width: 500
    };
      
    Plotly.newPlot('plot', data, layout);
  
}

// Call updatePlotly() when a change takes place to the DOM
d3.selectAll("#selDataset").on("change", updatePlotly);

// This function is called when a dropdown menu item is selected
function updatePlotly() {
    // Use D3 to select the dropdown menu
    var dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
    var dataset = dropdownMenu.property("value");
  
    var data = [];

    if (dataset == 'us'){
        data = us;
    }
    else if (dataset == 'uk'){
        data = uk;
    }
    else if (dataset == 'ca'){
        data = canada;
    }

    // Note the extra brackets around 'x' and 'y'
    Plotly.restyle("plot", "values", [data]);

  }



  init();