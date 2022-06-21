import { GoogleMap, Marker } from '@react-google-maps/api';
import Search from '../../components/Search/Search';
import React, { useState } from 'react';
import FindMe from '../../components/FindMe/FindMe';
import './AddPlace.css';
import { useNavigate } from 'react-router-dom';
import { Coordinates } from '../../Interfaces/AddPlaces.interface';

const parking = require('../../images/clarity_campervan-solid.png');

const center = {
  lat: 40.4637,
  lng: -3.7492,
};

const containerStyle = {
  width: '100vw',
  height: '40vw',
};

const AddPlace = () => {
  const [coordinates, setCoordinates] = useState<Coordinates | string>('');

  const navigate = useNavigate();

  const mapRef = React.useRef<google.maps.Map | null>(null);

  const onMapLoad = React.useCallback((map: google.maps.Map) => {
    mapRef.current = map;
  }, []);

  const panTo = React.useCallback(
    ({ lat, lng }: { lat: number; lng: number }) => {
      if (mapRef.current !== null) {
        mapRef.current.panTo({ lat, lng });
        mapRef.current.setZoom(18);
      }
    },
    [mapRef]
  );

  const setMarker = [coordinates];

  const onClickMap = (event: google.maps.MapMouseEvent | null) => {
    if (event && event.latLng) {
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
      navigate('/add-form', { state: coordinates });
    }
  };

  return (
    <main className='container-add'>
      <header className='search-header'>
        <FindMe panTo={panTo} />
        <Search panTo={panTo}></Search>
      </header>
      <div className='add-place-container'>
        <GoogleMap
          mapContainerClassName='map-add'
          mapContainerStyle={containerStyle}
          center={center}
          zoom={6}
          onLoad={onMapLoad as () => void}
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

        <button type='button' className='btn-next' onClick={() => toAddForm()}>
          Next
        </button>
      </div>
    </main>
  );
};

export default AddPlace;
