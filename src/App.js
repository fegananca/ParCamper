import Map from './Pages/Map';
import { useState, useEffect } from 'react';
import AddPlace from './Pages/AddPlace';
import AddForm from './Pages/AddForm';
import HomePage from './Pages/HomePage';
import { Routes, Route } from 'react-router-dom';

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
  }, []);

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<Map places={places} />} />
        <Route path="/add" element={<AddPlace />} />
        <Route path="/add-next" element={<AddForm onAdd={addPlaces} />} />
      </Routes>
    </div>
  );
}

export default App;
