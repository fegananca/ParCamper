import React from 'react';
import { useState } from 'react';
import '../Pages/addPlace.css';
import { Icon } from '@iconify/react';

const Upload = ({ setImage, previewSource, setPreviewSource }) => {
  const [fileInputState, setFileInputState] = useState('');
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
      const res = await fetch('https://parcamper-server.herokuapp.com/images', {
        method: 'POST',
        body: formData,
      });
      const url = await res.text();
      console.log(url, 'URL');
      setImage(url);
      setFileInputState('');
      setPreviewSource(url);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <label className="label-upload" htmlFor="fileInput">
        <Icon className="icon-upload" icon="uil:image-upload" />
        <p id="upload-label">Upload an image</p>
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
          style={{ height: '270px' }}
        />
      )}
    </>
  );
};

export default Upload;
