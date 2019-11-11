import React from 'react';
import './App.css';
import Map from './Map';

const defaultProps = {
  center: {
    lat: 44.5615578,
    lng: -123.2780367
  },
  zoom: 16
};
const App = () => (
  <div className="App">
    <Map {...defaultProps} />
  </div>
);

export default App;
