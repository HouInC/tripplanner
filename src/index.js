const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker");
mapboxgl.accessToken = 'pk.eyJ1IjoiY3BlcmFsdGEyNiIsImEiOiJjajhiczlsYWowMTk5MndwN3kwZGRjMDd0In0.LA09kf83yEMOBejDj7zcaA';



const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack coordinates
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const marker=buildMarker("activity", [-74.009151, 40.705086]);
marker.addTo(map);

