import { Dispatch, SetStateAction } from 'react';

export interface User {
  display_name: string;
  id: string | undefined;
}
export interface Playlist {
  name: string;
  uri: string;
}

// set_id: Dispatch<SetStateAction<string>>
