import axios from 'axios';
import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import { ILocation } from './interfaces/location_interfaces';
import { drawLocation } from './map-utils';

export interface IMap {
  apiKey: string;
  center: {
    lat: number;
    lng: number;
  };
  zoom: number;
  options: {
    styles: string;
  }
}
const handleApiLoaded = (map: google.maps.Map, maps, locations: ILocation[]) => {
  if (locations !== undefined) {
    locations.forEach(l => drawLocation(map, l));
  }
};

export const lightStyle = require("./styles/light_map.json");
export const darkStyle = require("./styles/dark_map.json");

const Map = (props: IMap) => {
  const [locations, setLocations] = useState();

  useEffect(() => {
    axios.get('mocks/campus_map_locations.json').then(res => setLocations(res.data.data));
  }, []);

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: props.apiKey, libraries: 'places' }}
        defaultCenter={props.center}
        defaultZoom={props.zoom}
        options={{ styles: lightStyle }}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps, locations)}
      >
        <Marker {...props.center} text="Marker" />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
