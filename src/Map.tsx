import React from 'react';
import GoogleMapReact from 'google-map-react';

const apiKey = process.env.REACT_APP_GA_MAPS_KEY as string;

const defaultProps = {
  center: {
    lat: 44.5615578,
    lng: -123.2780367
  },
  zoom: 11
};

interface IMap {
  center?: {
    lat: number;
    lng: number;
  };
  zoom?: number;
}

const AnyReactComponent = props => <div>{props.text}</div>;
const Map = (props: IMap = defaultProps) => (
  // Important! Always set the container height explicitly
  <div style={{ height: '100vh', width: '100%' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: apiKey, libraries: 'places' }}
      defaultCenter={props.center}
      defaultZoom={props.zoom}
    >
      <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
    </GoogleMapReact>
  </div>
);

export default Map;
