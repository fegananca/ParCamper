import Map from './components/Map';
import { useState, useEffect } from 'react';
import AddPlace from './components/AddPlace';
import AddForm from './components/AddForm';
import MainPage from './components/MainPage';
import { Routes, Route } from 'react-router-dom';
import { OnAddPlace } from './Interfaces/AddForm.interface';


function App() {
  const [places, setPlaces] = useState<OnAddPlace[]>([]);

  //apiservice
  const fetchPlaces = async () => {
    const fetchPlaces = await fetch('http://localhost:3001/places');
    const data = await fetchPlaces.json();
    setPlaces(data);
  };

  const addPlaces = async (place: OnAddPlace) => {
    const res = await fetch('http://localhost:3001/places', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(place),
    });
    const data: OnAddPlace = await res.json();

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
        <Route path='/add-form' element={<AddForm onAdd={addPlaces} />} />
      </Routes>
    </div>
  );
}

export default App;
