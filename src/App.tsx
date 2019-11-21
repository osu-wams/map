import React from 'react';
import './App.css';
import Map from './map/Map';
import { lightStyle } from './map/Map';
import { darkStyle } from './map/Map';

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
