import Map from './components/Map';
import { useState, useEffect } from 'react';
import AddPlace from './components/AddPlace.tsx';
import AddForm from './components/AddForm';
import MainPage from './components/MainPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [places, setPlaces] = useState([]);

  //apiservice
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
  console.log(places);

  useEffect(() => {
    fetchPlaces();
  }, []);

  //route name add-next
  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/search' element={<Map places={places} />} />
        <Route path='/add' element={<AddPlace />} />
        <Route path='/add-next' element={<AddForm onAdd={addPlaces} />} />
      </Routes>
    </div>
  );
}

export default App;
