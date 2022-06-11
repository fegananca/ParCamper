import React from 'react';
import { Icon } from '@iconify/react';

const FindMe = ({ panTo }) => {
  return (
    <button
      className="locate"
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          () => null
        );
      }}
    >
      <Icon icon="map:compass" />
    </button>
  );
};

export default FindMe;
