import { Dispatch, SetStateAction } from 'react';

interface Colors {
  filled: string,
  unfilled: string,
}

export interface RatingProps {
  count: number;
  rating: number;
  color: Colors;
  onRating: Dispatch<SetStateAction<number>>;
}
