import React from 'react';
import GoogleMapReact from 'google-map-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDrumstickBite } from '@fortawesome/pro-duotone-svg-icons';

const apiKey = process.env.REACT_APP_GA_MAPS_KEY as string;

interface IMap {
  center: {
    lat: number;
    lng: number;
  };
  zoom: number;
}

const MapMarker = props => (
  <div>
    <FontAwesomeIcon icon={faDrumstickBite} style={{ fontSize: '32px' }} />
    {props.text}
  </div>
);

const Map = (props: IMap) => (
  // Important! Always set the container height explicitly
  <div style={{ height: '100vh', width: '100%' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: apiKey, libraries: 'places' }}
      defaultCenter={props.center}
      defaultZoom={props.zoom}
    >
      <MapMarker {...props.center} text="Marker" />
    </GoogleMapReact>
  </div>
);

export default Map;
