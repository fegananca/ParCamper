import Map from './components/Map';
import { useState, useEffect } from 'react';
import AddPlace from './components/AddPlace';
import AddForm from './components/AddForm';
import MainPage from './components/MainPage';
import { Routes, Route } from 'react-router-dom';
import { OnAddPlace } from './Interfaces/AddForm.interface';
import { addNewPlaces, fetchAllPlaces } from './Services/Services';

function App() {
  const [places, setPlaces] = useState<OnAddPlace[]>([]);

  const fetchPlaces = async () => {
    const data = await fetchAllPlaces();
    setPlaces(data);
  };

  const addPlaces = async (place: OnAddPlace) => {
    const data = await addNewPlaces(place)
    setPlaces([...places, data]);
  };

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
