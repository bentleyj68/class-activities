console.log(data);
// YOUR CODE HERE
var god_pairs = data.map(gods => gods.pair);
var greek_names = data.map(gods => gods.greekName);
var greek_stats = data.map(gods => gods.greekSearchResults);
var roman_names = data.map(gods => gods.romanName);
var roman_stats = data.map(gods => gods.romanSearchResults);

console.log(roman_stats);

var trace1 = {
    x: god_pairs,
    y: greek_stats,
    type: "bar"
  };
  
  // Create our second trace
  var trace2 = {
    x: god_pairs,
    y: roman_stats,
    type: "bar"
  };

  var data = [trace1, trace2];
  
  var layout = {barmode: 'group'};

  Plotly.newPlot("plot", data, layout);