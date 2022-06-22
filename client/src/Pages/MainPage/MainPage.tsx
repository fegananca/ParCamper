import React from 'react';
import './MainPage.css';
import ButtonSearch from '../../components/ButtonSearch/ButtonSearch';
import { useNavigate } from 'react-router-dom';
import Login from '../../components/Login';
import { useEffect } from 'react';
import { gapi } from 'gapi-script';

//const mainVideo = require('../../images/pexels-pavel-danilyuk-9121392.mp4');
const clientId = '';

const MainPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
      });
    }
    gapi.load(start);
  });

  return (
    <main className='wrapper'>
      {/* <video autoPlay muted loop id='myVideo'>
        <source src={mainVideo} type='video/mp4' />
      </video> */}

      <ButtonSearch
        callBack={() => {
          navigate('/search');
        }}
      ></ButtonSearch>
      <header className='logo-header'>
        <h1 id='name'>PARCAMPER</h1>
      </header>

      <Login></Login>
    </main>
  );
};

export default MainPage;
