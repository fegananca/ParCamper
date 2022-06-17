import React from 'react';
import { useState } from 'react';
import './addPlace.css';
import { Icon } from '@iconify/react';
import { UploadProps } from '../Interfaces/upload.interface';

const Upload = ({ setImage, previewSource, setPreviewSource }: UploadProps) => {
  const [fileInputState, setFileInputState] = useState('');

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
     console.log(file, 'onchange')
      previewFile(file );
      setFileInputState(e.target.value);
      uploadImage(file);
    }
  };

  const previewFile = (file: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const uploadImage = async (file: File) => {
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
    <>
      <label className="label-upload" htmlFor="fileInput">
        <Icon
          className="icon-upload"
          icon="uil:image-upload"
          height={100}
          width={100}
        />
        <p id="upload-label">Upload an image</p>
        <form  className="form">
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
