import { Icon } from '@iconify/react';
import { LocationInfoInterface } from '../Interfaces/Map.interface';

const LocationInfo = ({ info }:{info: LocationInfoInterface}) => {
  return (
    <div className="location-info">
      <img src={info.photo} alt="place to park"></img>
      <div className="info-title">{info.title}</div>
      <div className="info-withIcon">
        <div className="info-rating">
          <Icon id="icon-review" icon="mdi:star" />
          {info.rating}
        </div>
        <div className="info-review">
          <Icon id="icon-comments" icon="dashicons:admin-comments" />
          {info.numberOfReviews}
        </div>
      </div>
    </div>
  );
};

export default LocationInfo;
