import React from 'react';
import {
  GoogleMap,
  // useJsApiLoader,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
import { useState } from 'react';
import LocationInfo from './LocationInfo';
import Search from './Search';

const center = {
  lat: 40.4637,
  lng: -3.7492,
};

const containerStyle = {
  width: '70vw',
  height: '70vw',
};

const Map = ({ places }) => {
  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);
  const panTo = React.useCallback(
    ({ lat, lng }) => {
      mapRef.current.panTo({ lat, lng });
      mapRef.current.setZoom(10);
    },
    [mapRef]
  );

  const [locationInfo, setLocationInfo] = useState(null);
  // const { isLoaded } = useJsApiLoader({
  //   id: 'google-map-script',
  //   googleMapsApiKey: 'AIzaSyAI65iBCALEFGedyf-02CjiOtoVQXZxaF8',
  //   libraries: ['places'],
  // });

  // if (!isLoaded) return 'Loading...';

  return (
    <>
      <Search panTo={panTo} />
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={6}
        onLoad={onMapLoad}
      >
        {places.map((data) => (
          <Marker
            key={data.id}
            position={{
              lat: data.lat,
              lng: data.lng,
            }}
            // icon={{
            //   url: `my-app/src/images/parking.png`,
            //   // origin: new window.google.maps.Point(0, 0),
            //   // anchor: new window.google.maps.Point(15, 15),
            //   // scaledSize: new window.google.maps.Size(30, 30),
            // }}
            onClick={() =>
              setLocationInfo({
                photo: data.photo,
                title: data.title,
                numberOfReviews: data.numberOfReviews,
                rating: data.rating,
                lat: data.lat,
                lng: data.lng,
              })
            }
          />
        ))}
        {locationInfo ? (
          <InfoWindow
            onCloseClick={() => {
              setLocationInfo(null);
            }}
            position={{ lat: locationInfo.lat, lng: locationInfo.lng }}
          >
            {locationInfo && <LocationInfo info={locationInfo} />}
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </>
  );
};

export default Map;
