import { Dispatch, SetStateAction } from 'react';
export interface User {
  name: string;
  picture: string;
}

export interface UserProps {
  user: User | undefined;
  setUser: Dispatch<SetStateAction<User | undefined>>;
}