import { GoogleMap } from '@react-google-maps/api';
import Search from './Search';
import React, { useState } from 'react';
import FindMe from './FindMe';
// import microCamper from '../images/Micro.png';

const center = {
  lat: 40.4637,
  lng: -3.7492,
};

const containerStyle = {
  width: '50vw',
  height: '50vw',
};

const AddPlace = ({ onAdd }) => {
  const [coordinates, setCoordinates] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [typePlace, setTypePlace] = useState('');
  const [services, setServices] = useState('');
  // const [disabled, Setdisabled] = useState(true);

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = React.useCallback(
    ({ lat, lng }) => {
      mapRef.current.panTo({ lat, lng });
      mapRef.current.setZoom(15);
    },
    [mapRef]
  );

  const panToFind = React.useCallback(
    ({ lat, lng }) => {
      mapRef.current.panTo({ lat, lng });
      mapRef.current.setZoom(20);
    },
    [mapRef]
  );

  const onClickMap = (coordinates) => {
    setCoordinates((current) => [
      {
        lat: coordinates.latLng.lat(),
        lon: coordinates.latLng.lng(),
      },
      ...current,
    ]);
  };

  const onSubmit = (e) => {
    // e.preventDefault();
    onAdd({ location: coordinates, vehicle: 'hello', typePlace, services });
    setSubtitle('');
    setTypePlace('');
    setServices('');
  };
  return (
    <>
      <FindMe panTo={panToFind} />
      <Search panTo={panTo}></Search>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={6}
        onLoad={onMapLoad}
        onClick={onClickMap}
      ></GoogleMap>
      <div className="form-container">
        <form className="add-form" onSubmit={onSubmit}>
          <div className="form-control">
            <input
              type="text"
              placeholder="Brief description of the place"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
            />
          </div>
          <button onClick={() => onSubmit()}>Submit</button>
        </form>
      </div>
    </>
  );
};

export default AddPlace;
