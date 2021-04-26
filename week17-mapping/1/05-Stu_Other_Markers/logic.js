// Create our initial map object
// Set the longitude, latitude, and the starting zoom level
var myMap = L.map("map").setView([-31.98, 115.819], 17);

// Add a tile layer (the background map image) to our map
// Use the addTo method to add objects to our map
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

// Create a red circle over Dallas
L.circle([-31.98, 115.816], {
  color: "red",
  fillColor: "none",
  fillOpacity: 0.75,
  radius: 50
}).addTo(myMap);

// Connect a black line from NYC to Toronto
var line = [
  [-31.98, 115.816],
  [-31.98, 115.814],
  [-31.984, 115.814],
  [-31.984, 115.815]
];

L.polyline(line, {
  color: "black"
}).addTo(myMap);

// Create a purple polygon that covers the area in Atlanta, Savannah, Jacksonville and Montgomery
L.rectangle([
  [-31.985, 115.812],
  [-31.983, 115.814]
], {
  color: "purple",
  weight: 3,
  stroke: true
}).addTo(myMap);