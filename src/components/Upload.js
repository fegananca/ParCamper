import React from 'react';
import { useState } from 'react';
import './addPlace.css';
import iconimg from '../images/uil_image-upload.png';

const Upload = ({ setImage }) => {
  const [fileInputState, setFileInputState] = useState('');
  const [previewSource, setPreviewSource] = useState('');
  const [selectedFile, setSelectedFile] = useState();

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
    setSelectedFile(file);
    setFileInputState(e.target.value);
    uploadImage(file);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleSubmitFile = (e) => {
    // e.preventDefault();
    if (!selectedFile) return;
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = () => {
      uploadImage(reader.result);
    };
  };

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append('image', file);

    try {
      const res = await fetch('http://localhost:3001/images', {
        method: 'POST',
        body: formData,
      });
      const url = await res.text();
      setImage(url);
      setFileInputState('');
      setPreviewSource(url);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <label className="label-upload" htmlFor="fileInput">
        <img id="icon-upload" src={iconimg} alt="icon to upload"></img>
        Upload an image
        <form onSubmit={handleSubmitFile} className="form">
          <input
            id="fileInput"
            type="file"
            name="image"
            onChange={handleFileInputChange}
            value={fileInputState}
            className="form-input"
            accept="image/*"
          />
        </form>
      </label>
      {previewSource && (
        <img
          className="img-input"
          src={previewSource}
          alt="chosen"
          style={{ height: '250px' }}
        />
      )}
    </div>
  );
};

export default Upload;
