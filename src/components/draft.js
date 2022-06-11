Map;

import { useState } from 'react';
import {
  GoogleMap,
  LoadScript,
  Marker,
  useLoadScript,
} from '@react-google-maps/api';
import LocationInfo from './LocationInfo';
import { db } from '../data';
import locationIcon from '@iconify/icons-mdi/parking';

const location = {
  lat: 37.773972,
  lng: -122.431297,
};

const Map = () => {
  const [locationInfo, setLocationInfo] = useState(null);

  return (
    <div className="map">
      <LoadScript googleMapsApiKey="AIzaSyAI65iBCALEFGedyf-02CjiOtoVQXZxaF8">
        <GoogleMap center={location} zoom={6}>
          {/* {db.hits.map((data) => (
          <Marker
            key={data._id}
            position={{
              lat: data._source.location.lat,
              lng: data._source.location.lon,
            }}
            //icon={{ locationIcon }}
            onClick={() =>
              setLocationInfo({
                photo: data._source.thumbnail,
                title: data._source.subtitle,
                numberOfReviews: data._source.filters.numberOfReviews,
                rating: data._source.filters.rating,
              })
            }
          />
        ))} */}
        </GoogleMap>
      </LoadScript>
      {/* {locationInfo && <LocationInfo info={locationInfo} />} */}
    </div>
  );
};

export default Map;


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
  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  }, []);

  const [locationInfo, setLocationInfo] = useState(null);
  // const { isLoaded } = useJsApiLoader({
  //   id: 'google-map-script',
  //   googleMapsApiKey: 'AIzaSyAI65iBCALEFGedyf-02CjiOtoVQXZxaF8',
  //   libraries: ['places'],
  // });

  return (
    <>
      <Search panTo={panTo} />
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={6}>
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
            onLoad={onMapLoad}
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


<form className="add-form">
        <div className="form-control">
          <label>Vehicle type</label>
          <div className="type-car">
            <input
              type="checkbox"
              id="micro"
              onChange={(e) => setVehicle(e.target.value)}
            ></input>
            <span>Micro</span>
          </div>
          <div className="type-car">
            <input
              type="checkbox"
              id="small"
              onChange={(e) => setVehicle(e.target.value)}
            ></input>
            <span>Small</span>
          </div>
          <div className="type-car">
            <input
              type="checkbox"
              id="medium"
              onChange={(e) => setVehicle(e.target.value)}
            ></input>
            <span>Medium</span>
          </div>
          <div className="type-car">
            <input
              type="checkbox"
              id="large"
              onChange={(e) => setVehicle(e.target.value)}
            ></input>
            <span>Large</span>
          </div>
          <div className="type-car">
            <input
              type="checkbox"
              id="box"
              onChange={(e) => setVehicle(e.target.value)}
            ></input>
            <span>Box</span>
          </div>

          <div className="form-control">
            <label>Type of place</label>
            <div className="type-place">
              <input
                type="checkbox"
                id="free-parking"
                onChange={(e) => setTypePlace(e.target.value)}
              ></input>
              <span>Free parking</span>
            </div>
            <div className="type-place">
              <input
                type="checkbox"
                id="paid-parking"
                onChange={(e) => setTypePlace(e.target.value)}
              ></input>
              <span>Paid parking</span>
            </div>
            <div className="type-place">
              <input
                type="checkbox"
                id="service-area"
                onChange={(e) => setTypePlace(e.target.value)}
              ></input>
              <span>Service area</span>
            </div>
            <div className="type-place">
              <input
                type="checkbox"
                id="campsite"
                onChange={(e) => setTypePlace(e.target.value)}
              ></input>
              <span>Campsite</span>
            </div>
          </div>

          <div className="form-control">
            <label>Provided services</label>
            <div className="services">
              <input
                type="checkbox"
                id="waste water"
                onChange={(e) => setServices(e.target.value)}
              ></input>
              <span>Water waste</span>
            </div>
            <div className="services">
              <input
                type="checkbox"
                id="black-water"
                onChange={(e) => setServices(e.target.value)}
              ></input>
              <span>Black water</span>
            </div>
            <div className="services">
              <input
                type="checkbox"
                id="Toilet"
                onChange={(e) => setServices(e.target.value)}
              ></input>
              <span>Toilet</span>
            </div>
            <div className="services">
              <input
                type="checkbox"
                id="Electricity"
                onChange={(e) => setServices(e.target.value)}
              ></input>
              <span>Electricity</span>
            </div>
            <div className="services">
              <input
                type="checkbox"
                id="Wi-fi"
                onChange={(e) => setServices(e.target.value)}
              ></input>
              <span>Wi-fi</span>
            </div>
            <div className="services">
              <input
                type="checkbox"
                id="3g-4g"
                onChange={(e) => setServices(e.target.value)}
              ></input>
              <span>3G/4G Internet</span>
            </div>
          </div>

          {/* <button>
            <img src={microCamper} alt="cars" onClick={'click'}></img>
          </button> */}

          <input style={{ cursor: 'pointer' }} type="submit" value="Next" />
        </div>
      </form>
