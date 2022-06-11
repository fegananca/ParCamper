import Map from './components/Map';
import { useState, useEffect } from 'react';
import AddPlace from './components/AddPlace';
import { Routes, Route } from 'react-router-dom';

// import { db } from './data';

function App() {
  const [places, setPlaces] = useState([]);

  const fetchPlaces = async () => {
    const fetchPlaces = await fetch('http://localhost:3001/places');
    const data = await fetchPlaces.json();
    setPlaces(data);
  };

  const addPlaces = async (place) => {
    const res = await fetch('http://localhost:3001/places', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(place),
    });
    const data = await res.json();

    setPlaces([...places, data]);
  };

  useEffect(() => {
    fetchPlaces();
    // const locations = db.hits.map((data) => ({
    //   id: data._id,
    //   photo: data._source.thumbnail,
    //   title: data._source.subtitle,
    //   numberOfReviews: data._source.filters.numberOfReviews,
    //   rating: data._source.filters.rating,
    //   lat: data._source.location.lat,
    //   lng: data._source.location.lon,
    // }));

    // setPlaces(locations);
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Map places={places} />} />
        <Route path="/add" element={<AddPlace onAdd={addPlaces} />} />
      </Routes>
    </div>
  );
}

export default App;
