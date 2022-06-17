import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Search from './Search';
import React, { useState } from 'react';
import FindMe from './FindMe';
import './addPlace.css';
import { useNavigate } from 'react-router-dom';
import { Coordinates } from '../Interfaces/addPlaces.interfaces';
const parking = require('../Pages/images/clarity_campervan-solid.png');

const center = {
  lat: 40.4637,
  lng: -3.7492,
};

const containerStyle = {
  width: '100vw',
  height: '40vw',
};

const API_KEY = process.env.REACT_APP_GMAPS_API_KEY;

const AddPlace = () => {
  const [coordinates, setCoordinates] = useState<Coordinates | string>('');

  const navigate = useNavigate();

  const mapRef = React.useRef<google.maps.Map | null>(null);

  const onMapLoad = React.useCallback((map: google.maps.Map ) => {

    mapRef.current = map;
  }, []);

  const panTo = React.useCallback(
    ({ lat, lng }:{lat: number, lng: number}) => {
      if(mapRef.current !== null){
        mapRef.current.panTo({ lat, lng });
        mapRef.current.setZoom(15);
      }
    },
    [mapRef]
  );

  const panToFind = React.useCallback(
    ({ lat, lng }:{lat: number, lng: number}) => {
      if(mapRef.current !== null){
        mapRef.current.panTo({ lat, lng });
        mapRef.current.setZoom(20);
      }
    },
    [mapRef]
  );

  const setMarker = [coordinates];

  const onClickMap = (event: google.maps.MapMouseEvent | null) => {
    if(event && event.latLng){
      setCoordinates({
        lat: event.latLng.lat(),
        lon: event.latLng.lng(),
      });
    }
  };

  const toAddForm = () => {
    if (!coordinates) {
      alert('Please, enter a location.');
    } else {
      navigate('/add-next', { state: coordinates });
    }
  };



  return (
    <div className='container-add'>
      <div className='search-header'>
        <FindMe panTo={panToFind} />
        <Search panTo={panTo}></Search>
      </div>
      <div className='add-place-container'>
      <LoadScript googleMapsApiKey={API_KEY as string} language='en'>
        <GoogleMap
          mapContainerClassName='map-add'
          mapContainerStyle={containerStyle}
          center={center}
          zoom={6}
          onLoad={onMapLoad as ()=> void}
          onClick={onClickMap}

        >
          {setMarker &&
            setMarker.map((coord) => {
              return (
                <Marker
                  key={JSON.stringify(coord)}
                  position={{
                    lat: Number((coord as Coordinates).lat),
                    lng: Number((coord as Coordinates).lon),
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
        </LoadScript>
        <button type='button' className='btn-next' onClick={() => toAddForm()}>
          Next
        </button>
      </div>
    </div>
  );
};

export default AddPlace;
