import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDrumstickBite } from '@fortawesome/pro-duotone-svg-icons';

export const Marker = props => (
  <div>
    <FontAwesomeIcon icon={faDrumstickBite} style={{ fontSize: '32px' }} />
    {props.text}
  </div>
);

export default Marker;
