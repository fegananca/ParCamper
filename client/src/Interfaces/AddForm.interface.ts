import { Dispatch, SetStateAction } from 'react';

export interface OnAddPlace {
  location: Coordinates;
  subtitle: string;
  rating: number;
  review: string;
  thumbnail: string;
}

export interface Coordinates {
  lat: number;
  lon: number;
}

export interface Raiting {
  raiting: number;
}

export interface AddFormProps {
  onAdd: Dispatch<SetStateAction<any>>;
}
