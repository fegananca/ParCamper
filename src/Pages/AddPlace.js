import { GoogleMap, Marker } from '@react-google-maps/api';
import Search from '../components/Search';
import React, { useState } from 'react';
import FindMe from '../components/FindMe';
import './addPlace.css';
import { useNavigate } from 'react-router-dom';
import parking from '../media/clarity_campervan-solid.png';

const center = {
  lat: 40.4637,
  lng: -3.7492,
};

const containerStyle = {
  width: '100vw',
  height: '40vw',
};

const AddPlace = () => {
  const [coordinates, setCoordinates] = useState('');

  const navigate = useNavigate();

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

  const setMarker = [coordinates];

  const onClickMap = (event) => {
    setCoordinates({
      lat: event.latLng.lat(),
      lon: event.latLng.lng(),
    });
  };

  const toAddForm = () => {
    if (!coordinates) {
      alert('Please, enter a location.');
    } else {
      navigate('/add-next', { state: coordinates });
    }
  };

  return (
    <div className="container-add">
      <div className="search-header">
        <FindMe panTo={panToFind} />
        <Search panTo={panTo}></Search>
      </div>
      <div className="add-place-container">
        <GoogleMap
          mapContainerClassName="map-add"
          mapContainerStyle={containerStyle}
          center={center}
          zoom={6}
          onLoad={onMapLoad}
          onClick={onClickMap}
        >
          {setMarker &&
            setMarker.map((coord) => {
              return (
                <Marker
                  key={JSON.stringify(coord)}
                  position={{
                    lat: parseFloat(coord.lat),
                    lng: parseFloat(coord.lon),
                  }}
                  icon={{
                    url: parking,
                    origin: new window.google.maps.Point(0, 0),
                    anchor: new window.google.maps.Point(15, 15),
                    scaledSize: new window.google.maps.Size(30, 30),
                  }}
                ></Marker>
              );
            })}
        </GoogleMap>
        <button type="button" className="btn-next" onClick={() => toAddForm()}>
          Next
        </button>
      </div>
    </div>
  );
};

export default AddPlace;
