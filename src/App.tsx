import React from 'react';
import './App.css';
import Map from './map/Map';
const lightStyle = require("./map/styles/light_map.json");
const darkStyle = require("./map/styles/dark_map.json");
const apiKey = process.env.REACT_APP_GA_MAPS_KEY as string;
const defaultProps = {
  apiKey,
  center: {
    lat: 44.5615578,
    lng: -123.2780367
  },
  zoom: 16,
  options: {
    styles: lightStyle
  }
};
const App = () => (
  <div className="App">
    <Map {...defaultProps} />
  </div>
);

export default App;
