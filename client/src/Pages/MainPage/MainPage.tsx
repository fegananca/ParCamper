import React from 'react';
import './MainPage.css';
// import ButtonSearch from '../../components/ButtonSearch/ButtonSearch';
// import { useNavigate } from 'react-router-dom';
import Login from '../../components/Login/Login';

const mainVideo = require('../../images/pexels-pavel-danilyuk-9121392.mp4');

const MainPage = () => {
  // const navigate = useNavigate();

  return (
    <main className='wrapper'>
      <video autoPlay muted loop id='myVideo'>
        <source src={mainVideo} type='video/mp4' />
      </video>


      <Login></Login>
      <header className='logo-header'>
        <h1 id='name'>PARCAMPER</h1>
      </header>
    </main>
  );
};

export default MainPage;
