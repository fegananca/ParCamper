import React from 'react';
import './Upload.css';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { Dispatch, SetStateAction } from 'react';
import { postImage } from '../../Services/Services';

interface UploadProps {
  setImage: Dispatch<SetStateAction<string>>;
  previewSource: string;
  setPreviewSource: Dispatch<SetStateAction<string>>;
}

const Upload = ({ setImage, previewSource, setPreviewSource }: UploadProps) => {
  //used for handle the photo upload and show the file preview
  const [fileInputState, setFileInputState] = useState<string>('');
  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      previewFile(file);
      setFileInputState(e.target.value);
      uploadImage(file);
    }
  };

  const uploadImage = async (file: File) => {
    const formData = new FormData();
    formData.append('image', file);
    try {
      const url = await postImage(formData);
      setImage(url);
      setFileInputState('');
      setPreviewSource(url);
    } catch (err) {
      console.error(err);
    }
  };

  const previewFile = (file: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
  };

  return (
    <>
      <label className='label-upload' htmlFor='fileInput'>
        <Icon
          className='icon-upload'
          icon='uil:image-upload'
          height={100}
          width={100}
        />
        <span id='upload-label'>Upload an image</span>
        <form className='form'>
          <input
            id='fileInput'
            type='file'
            name='image'
            onChange={handleFileInputChange}
            value={fileInputState}
            className='form-input'
            accept='image/*'
          />
        </form>
      </label>
      {previewSource && (
        <img
          className='img-input'
          src={previewSource}
          alt='chosen'
          style={{ height: '270px' }}
        />
      )}
    </>
  );
};

export default Upload;
