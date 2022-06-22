import React from 'react';
import './MainPage.css';
import Login from '../../components/Login/Login';
import { UserProps } from '../../Interfaces/User.interface';

const mainVideo = require('../../images/pexels-pavel-danilyuk-9121392.mp4');

const MainPage = ({user, setUser} : UserProps) => {
  // const navigate = useNavigate();

  return (
    <main className='wrapper'>
      <video autoPlay muted loop id='myVideo'>
        <source src={mainVideo} type='video/mp4' />
      </video>


      <Login user={user} setUser={setUser}></Login>
      <header className='logo-header'>
        <h1 id='name'>PARCAMPER</h1>
      </header>
    </main>
  );
};

export default MainPage;
