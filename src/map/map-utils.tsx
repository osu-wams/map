import { ILocation } from './interfaces/location_interfaces';

const drawPolygon = (map: google.maps.Map, polygon: [number[]]) => {
  const path = polygon.map(coords => new google.maps.LatLng(coords[1], coords[0]));

  let drawnPolygon = new window.google.maps.Polygon({
    fillOpacity: 0.8,
    fillColor: '#444',
    strokeColor: '#aaa',
    strokeOpacity: 1,
    strokeWeight: 1,
    paths: path
  });
  drawnPolygon.setMap(map);

  /* mouse hover effects
  window.google.maps.event.addListener(drawnPolygon, 'mouseover', () => {
    drawnPolygon.setOptions({
      zIndex: 1000000000,
      strokeWeight: 2,
      strokeColor: '#fff'
    });
  });

  window.google.maps.event.addListener(drawnPolygon, 'mouseout', () => {
    drawnPolygon.setOptions({
      zIndex: 1,
      strokeWeight: 1,
      strokeColor: '#aaa'
    });
  });
  */
};

/**
 * Draw the polygon(s) provide for the map location
 * @param map reference to the google maps map instance
 * @param location the location data
 */
export const drawLocation = (map: google.maps.Map, location: ILocation) => {
  const { geometry, name } = location.attributes;
  if (!geometry) return;
  console.debug(`Drawing '${name}'`);
  const { type, coordinates } = geometry;
  coordinates.forEach(polygon => {
    if (type.toLowerCase() === 'multipolygon') {
      polygon.forEach(p => {
        drawPolygon(map, p);
      });
    } else {
      drawPolygon(map, polygon);
    }
  });
};
