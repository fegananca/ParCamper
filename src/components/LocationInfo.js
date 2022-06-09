const LocationInfo = ({ info }) => {
  return (
    <div className="location-info">
      <img src={info.photo} alt="place to park"></img>
      <div className="info-title">{info.title}</div>
      <div className="info-withIcon">
        <div className="info-review">{info.numberOfReviews}</div>
        <div className="info-rating">{info.rating}</div>
      </div>
    </div>
  );
};

export default LocationInfo;
