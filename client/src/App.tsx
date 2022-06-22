import Map from './Pages/Map/Map';
import { useState } from 'react';
import AddPlace from './Pages/AddPlace/AddPlace';
import AddForm from './Pages/AddForm/AddForm';
import MainPage from './Pages/MainPage/MainPage';
import { Routes, Route } from 'react-router-dom';
import { OnAddPlace } from './Interfaces/AddForm.interface';
import { addNewPlaces, fetchAllPlaces } from './Services/Services';
import { User } from './Interfaces/User.interface';

function App() {
  const [places, setPlaces] = useState<OnAddPlace[]>([]);
  const [user, setUser] = useState<User | undefined>();
  const fetchPlaces = async () => {
    const data = await fetchAllPlaces();
    setPlaces(data);
  };

  const addPlaces = async (place: OnAddPlace) => {
    const data = await addNewPlaces(place);
    setPlaces([...places, data]);
  };

  //route name add-next
  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<MainPage user={user} setUser={setUser}/>} />
        <Route
          path='/search'
          element={<Map user={user} setUser={setUser} places={places} fetchPlaces={fetchPlaces} />}
        />
        <Route path='/add' element={<AddPlace />} />
        <Route path='/add-form' element={<AddForm onAdd={addPlaces} />} />
      </Routes>
    </div>
  );
}

export default App;
