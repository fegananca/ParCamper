import React from 'react';
import compass from '../Pages/images/clarity_compass-solid.png';

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
      <img src={compass} alt="submit button" className="findme-icon"></img>
    </button>
  );
};

export default FindMe;
