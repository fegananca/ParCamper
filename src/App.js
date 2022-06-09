import Map from './components/Map';
import { useState, useEffect } from 'react';
import { db } from './data';

function App() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const locations = db.hits.map((data) => ({
      id: data._id,
      photo: data._source.thumbnail,
      title: data._source.subtitle,
      numberOfReviews: data._source.filters.numberOfReviews,
      rating: data._source.filters.rating,
      lat: data._source.location.lat,
      lng: data._source.location.lon,
    }));

    setPlaces(locations);
  }, []);

  return (
    <div>
      <Map places={places}></Map>
    </div>
  );
}

export default App;
