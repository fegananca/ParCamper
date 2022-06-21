import { Icon } from '@iconify/react';
import { LocationInfoInterface } from '../Interfaces/Map.interface';

const LocationInfo = ({ info }: { info: LocationInfoInterface }) => {
  return (
    <div className='location-info'>
      <img src={info.photo} alt='place to park'></img>
      <h3 className='info-title'>{info.title}</h3>
      <div className='info-withIcon'>
        <h5 className='info-rating'>
          <Icon id='icon-review' icon='mdi:star' />
          {info.rating}
        </h5>
        <h5 className='info-review'>
          <Icon id='icon-comments' icon='dashicons:admin-comments' />
          {info.numberOfReviews}
        </h5>
      </div>
    </div>
  );
};

export default LocationInfo;
