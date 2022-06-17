import Rating from './Rating';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Upload from './Upload';
import { Icon } from '@iconify/react';
// import parking from '../Pages/images/clarity_campervan-solid.png';
import './addPlace.css';

const AddForm = ({ onAdd }) => {
  const [previewSource, setPreviewSource] = useState('');
  const locationAddPlace = useLocation();
  const [subtitle, setSubtitle] = useState('');
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [image, setImage] = useState('');
  const [showTitleBox, setTitleBox] = useState(false);
  const [showReviewBox, setReviewBox] = useState(false);
  const coordinates = locationAddPlace.state;

  const navigate = useNavigate();

  const toogleTitle = () => setTitleBox(!showTitleBox);
  const toogleReview = () => setReviewBox(!showReviewBox);

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
    setPreviewSource('');

    if (!image && !rating) {
      alert('Please, upload an image and give us your feedback =)');
    } else {
      alert('Successfully uploaded');
      navigate('/search');
    }
  };

  return (
    <>
      <div className="navbar">
        <div className="next-header">
          <Icon
            icon="clarity:campervan-solid"
            width={130}
            height={130}
            className="icon-logo"
          />
          <span>Help us grow our community</span>
        </div>

        <div className="menu">
          <ul>
            <li>
              <div className="menu-bar" id="menu-1">
                <Upload
                  previewSource={previewSource}
                  setPreviewSource={setPreviewSource}
                  setImage={setImage}
                ></Upload>
                {/* <div className="img-upload">{image}</div> */}
              </div>
            </li>
            <li>
              <div className="menu-bar" id="menu-2">
                <button className="btn-1" onClick={toogleTitle}>
                  <Icon
                    className="icon-desc"
                    icon="ooui:text-summary-ltr"
                    height={100}
                    width={100}
                  />
                  <p id="upload-label">Brief description</p>
                </button>
                <ul>
                  <textarea
                    className={showTitleBox ? 'add-subtitle' : 'display-none'}
                    placeholder="Add a brief description of the place"
                    value={subtitle}
                    onChange={(e) => setSubtitle(e.target.value)}
                  />
                </ul>
              </div>
            </li>
            <li>
              <div className="menu-bar" id="menu-3">
                <button className="btn-2" onClick={toogleReview}>
                  <Icon icon="uil:feedback" height={100} width={100} />
                  <p id="feedback-label">Feedback</p>
                </button>
                <ul>
                  <Rating
                    rating={rating}
                    onRating={(rate) => setRating(rate)}
                  ></Rating>
                  <textarea
                    className={showReviewBox ? 'add-review' : 'display-none'}
                    placeholder="Please write a review"
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                  />
                </ul>
              </div>
            </li>

            <li>
              <div className="menu-bar" id="menu-4">
                <button id="form-submit" onClick={() => onSubmit()}>
                  <div>
                    <Icon
                      className="icon-submit"
                      icon="material-symbols:download-done-outline"
                      height={50}
                      width={50}
                    />
                  </div>
                  <span id="submit-label">Submit</span>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AddForm;
