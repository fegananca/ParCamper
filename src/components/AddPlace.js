import { GoogleMap } from '@react-google-maps/api';
import Search from './Search';
import Rating from './Rating';
import React, { useState } from 'react';
import FindMe from './FindMe';
import Upload from './Upload';
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
  const [coordinates, setCoordinates] = useState(null);
  const [subtitle, setSubtitle] = useState('');
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

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
    setCoordinates({
      lat: coordinates.latLng.lat(),
      lon: coordinates.latLng.lng(),
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onAdd({ location: coordinates, subtitle, rating, review });
    setSubtitle('');
    setRating(0);
    setReview('');
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
        <Upload></Upload>
        <form className="add-form" onSubmit={onSubmit}>
          <div className="form-control">
            <input
              type="text"
              placeholder="Brief description of the place"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
            />
          </div>
          <Rating
            className="rating"
            rating={rating}
            onRating={(rate) => setRating(rate)}
          ></Rating>
          <input
            type="text"
            placeholder="Please write a review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
          <button onClick={() => onSubmit()}>Submit</button>
        </form>
      </div>
    </>
  );
};

export default AddPlace;
