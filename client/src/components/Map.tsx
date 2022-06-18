import React from 'react';
import {
  GoogleMap,
  Marker,
  InfoWindow
} from '@react-google-maps/api';
import { useState } from 'react';
import LocationInfo from './LocationInfo';
import Search from './Search';
import { Icon } from '@iconify/react';
import { LocationInfoInterface } from '../Interfaces/Map.interface';
import ButtonAdd  from './ButtonAdd';
const parking = require('../Pages/images/clarity_campervan-solid.png');


const center = {
  lat: 40.4637,
  lng: -3.7492,
};

const containerStyle = {
  width: '100vw',
  height: '100vw',
};

const Map = ({ places }: {places: any}) => {
  const [locationInfo, setLocationInfo] = useState<LocationInfoInterface | null>(null);

  const mapOptions = {
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    zoomControl: false,
  };

  const mapRef = React.useRef<google.maps.Map | null>(null);

  const onMapLoad = React.useCallback((map: google.maps.Map ) => {
    mapRef.current = map;

  }, []);

  const panTo = React.useCallback(
    ({ lat, lng }:{lat: number, lng: number}) => {
      if(mapRef.current !== null){
        mapRef.current.panTo({ lat, lng });
        mapRef.current.setZoom(10);
      }
    },
    [mapRef]
  );

  return (
    <div className='container-map'>
      <div className='header'>
        {/* <Icon
          icon="clarity:campervan-solid"
          width={90}
          height={90}
          className="icon-logo-map"
        /> */}
        <Search panTo={panTo} />
        <ButtonAdd></ButtonAdd>
      </div>
      <div className='search-bar-icons'>
        <Icon icon='icon-park-outline:mountain' width={50} height={40} />
        <Icon icon='fa-solid:umbrella-beach' width={50} height={40} />
        <Icon icon='ic:twotone-hiking' width={50} height={40} />
        <Icon
          icon='emojione-monotone:person-mountain-biking'
          width={50}
          height={40}
        />
        <Icon icon='healthicons:electricity-outline' width={50} height={40} />
        <Icon icon='iconoir:internet' width={50} height={40} />
      </div>
     
        <GoogleMap
          mapContainerClassName='map'
          mapContainerStyle={containerStyle}
          center={center}
          zoom={7}
          onLoad={onMapLoad as ()=> void}
          options={mapOptions}
          
        >
          {places.map((data :any) => (
            <Marker
              key={data._id}
              position={{
                lat: data._source.location.lat,
                lng: data._source.location.lon,
              }}
              icon={{
                url: parking,
                origin: new window.google.maps.Point(0, 0),
                anchor: new window.google.maps.Point(15, 15),
                scaledSize: new window.google.maps.Size(30, 30),
              }}
              onClick={() =>
                setLocationInfo({
                  photo: data._source.thumbnail,
                  title: data._source.subtitle,
                  numberOfReviews: data._source.filters.numberOfReviews,
                  rating: data._source.filters.rating,
                  review: data._source.filters.review,
                  lat: data._source.location.lat,
                  lng: data._source.location.lon,
                })
              }
            />
          ))}
          {locationInfo ? (
            <InfoWindow
              options={{ maxWidth: 150 }}
              onCloseClick={() => {
                setLocationInfo(null);
              }}
              //
              position={{ lat: locationInfo.lat, lng: locationInfo.lng }}
            >
              {locationInfo && <LocationInfo info={locationInfo} />}
            </InfoWindow>
          ) : null}
        </GoogleMap>
  
    </div>
  );
};

export default Map;
