// Create a map object
var myMap = L.map("map", {
  center: [-25.27, 133.77],
  zoom: 5
});

// Add a tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

// City markers
var marker = L.marker([-31.95, 115.86], {
  draggable: true,
  title: "The best!!"
}).addTo(myMap);
// Add code to create a marker for each city below and add it to the map

// Melbourne;
var marker = L.marker([-37.81, 144.96], {
  draggable: true,
  title: "Good for footy and food"
}).addTo(myMap);
// Sydney;
var marker = L.marker([-33.86, 151.20], {
  draggable: true,
  title: "Good for footy and food"
}).addTo(myMap);
// Brisbane;
var marker = L.marker([-27.47, 153.02], {
  draggable: true,
  title: "Good for footy and food"
}).addTo(myMap);
// la;
// omaha;
