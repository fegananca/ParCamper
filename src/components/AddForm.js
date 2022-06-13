import Rating from './Rating';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Upload from './Upload';
import submit from '../images/material-symbols_upload-rounded.png';
import './addPlace.css';

const AddForm = ({ onAdd }) => {
  const locationAddPlace = useLocation();
  const [subtitle, setSubtitle] = useState('');
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [image, setImage] = useState('');
  const coordinates = locationAddPlace.state;

  const onSubmit = (e) => {
    // e.preventDefault();
    onAdd({
      location: coordinates,
      subtitle,
      rating,
      review,
      thumbnail: image,
    });
    setSubtitle('');
    setRating(0);
    setReview('');
    setImage('');
  };

  return (
    <>
      <div className="next-header"></div>
      <div className="form-container">
        <p className="label-form">About the place</p>
        <form className="add-form" onSubmit={onSubmit}>
          <div className="brief-desc">
            <Upload setImage={setImage}></Upload>
            <div>{image}</div>
            <textarea
              className="add-subtitle"
              placeholder="Add a brief description of the place"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
            />
          </div>
          <p className="label-form">Give us your feedback</p>
          <Rating rating={rating} onRating={(rate) => setRating(rate)}></Rating>
          <textarea
            className="add-review"
            placeholder="Please write a review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
        </form>

        <button id="form-submit" onClick={() => onSubmit()}>
          <img src={submit} alt="submit button"></img>
          <p id="submit-label">Submit</p>
        </button>
      </div>
    </>
  );
};

export default AddForm;
