const m = require('mithril');
const mapboxgl = require('mapbox-gl');
const root = document.body;

const Map = {
  view: () => m('div', {id: 'map'}),
};

m.mount(root, Map);

mapboxgl.accessToken = 'pk.eyJ1Ijoicm9iZXJ0YXhlbGtpcmJ5IiwiYSI6ImNqOTE3aHJxajJjbHkyeHBlaTR6M2FqOWoifQ.zC4G-gKN2J6kUWh6aIRPpw';

const map = new mapboxgl.Map({
  container: 'map',
  zoom: 13,
  center: [-120.385471, 46.380045],
  style: 'mapbox://styles/mapbox/satellite-v9',
  doubleClickZoom: false
});

map.on('load', () => map.resize());
