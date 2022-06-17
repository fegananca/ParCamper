export interface LocationInfoInterface {
  photo: string;
  title: string;
  numberOfReviews: number;
  rating: number;
  review: [string];
  lat: number;
  lng: number;
}


export interface MapOptionsInterface {
  mapTypeControl: boolean;
  scaleControl: boolean;
  streetViewControl: boolean;
  fullscreenControl: boolean;
  zoomControl: boolean;
}