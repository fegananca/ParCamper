import { Dispatch, SetStateAction } from 'react';

export interface UploadProps {
  setImage: Dispatch<SetStateAction<any>>;
  previewSource: any;
  setPreviewSource: Dispatch<SetStateAction<any>>;
}
