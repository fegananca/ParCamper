import Rating from './Rating';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Upload from './Upload';
import { Icon } from '@iconify/react';
// import parking from '../Pages/images/clarity_campervan-solid.png';
import './addPlace.css';
import { Coordinates, OnAddPlace } from '../Interfaces/AddForm.interface';

const AddForm = ({ onAdd }: { onAdd: (arg0: OnAddPlace) => void }) => {
  const [previewSource, setPreviewSource] = useState<string>('');
  const locationAddPlace = useLocation();
  const [subtitle, setSubtitle] = useState<string>('');
  const [rating, setRating] = useState<number>(0);
  const [review, setReview] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [showTitleBox, setTitleBox] = useState<boolean>(false);
  const [showReviewBox, setReviewBox] = useState<boolean>(false);
  const coordinates = locationAddPlace.state;

  const navigate = useNavigate();

  const toogleTitle = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setTitleBox(!showTitleBox);
  };
  const toogleReview = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setReviewBox(!showReviewBox);
  };

  const onSubmit = () => {
    onAdd({
      location: coordinates as Coordinates,
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
    <div className='navbar'>
      <div className='next-header'>
        <Icon
          icon='clarity:campervan-solid'
          width={130}
          height={130}
          className='icon-logo'
        />
        <span>Help us grow our community</span>
      </div>

      <form className='menu'>
        <div className='menuButton'>
          <Upload
            previewSource={previewSource}
            setPreviewSource={setPreviewSource}
            setImage={setImage}
          ></Upload>
        </div>
        <div className='menuButton'>
          <button className='btn-1' onClick={toogleTitle}>
            <Icon
              className='icon-desc'
              icon='ooui:text-summary-ltr'
              height={100}
              width={100}
            />
            <p id='upload-label'>Brief description</p>
          </button>
          <input
            type='textarea'
            className={showTitleBox ? 'add-subtitle' : 'display-none'}
            placeholder='Add a brief description of the place'
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
          />
        </div>
        <div className='menuButton'>
          <button className='btn-1' onClick={toogleReview}>
            <Icon icon='uil:feedback' height={100} width={100} />
            <p id='feedback-label'>Feedback</p>
          </button>
          <input
            type='textarea'
            className={showReviewBox ? 'add-review' : 'display-none'}
            placeholder='Please write a review'
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
        </div>
        <Rating rating={rating} onRating={(rate: any) => setRating(rate)} />
        <div className='menuButton' id='menu-4'>
          <button id='form-submit' onClick={() => onSubmit()}>
            <div>
              <Icon
                className='icon-submit'
                icon='material-symbols:download-done-outline'
                height={50}
                width={50}
              />
            </div>
            <span id='submit-label'>Submit</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddForm;
