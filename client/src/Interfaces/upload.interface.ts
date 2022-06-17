import { Dispatch, SetStateAction } from 'react';

export interface UploadProps {
  setImage: Dispatch<SetStateAction<string>>;
  previewSource: string;
  setPreviewSource: Dispatch<SetStateAction<string>>;
}
