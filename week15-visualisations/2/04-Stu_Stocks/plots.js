var apiKey = "RNAqAn6r66nxzxzyptcG";

/* global Plotly */
var url =
  `https://www.quandl.com/api/v3/datasets/WIKI/AMZN.json?start_date=2016-10-01&end_date=2017-10-01&api_key=${apiKey}`;

/**
 * Helper function to select stock data
 * Returns an array of values
 * @param {array} rows
 * @param {integer} index
 * index 0 - Date
 * index 1 - Open
 * index 2 - High
 * index 3 - Low
 * index 4 - Close
 * index 5 - Volume
 */
function unpack(rows, index) {
  return rows.map(function(row) {
    return row[index];
  });
}

/**
 * Fetch data and build the timeseries plot
 */
function buildPlot() {
  // @TODO: YOUR CODE HERE
  d3.json(url).then(function(data) {
    console.log(data);
    var name = data.dataset.name;
    var stock = data.dataset.dataset_code;
    var start_date = data.dataset.start_date;
    var end_date = data.dataset.end_date;
    var dates = unpack(data.dataset.data, 0);
    var closing_prices = unpack(data.dataset.data, 4);
  });

  var trace = {
    type: "scatter",
    mode: "line",
    x: dates,
    y: closing_prices,
    name: stock
  };

  var data = [trace];

  var layout = {
    title: "AMZN closing prices"
  };
  
  // Render the plot to the `plot1` div
  Plotly.newPlot("plot", data, layout);

}

buildPlot();
