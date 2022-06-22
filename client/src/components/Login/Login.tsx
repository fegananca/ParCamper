import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import ButtonSearch from '../ButtonSearch/ButtonSearch';
import { useEffect, useRef, useState } from 'react';
import jwt_decode from 'jwt-decode'
const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function Login() {
  const navigate = useNavigate();
  function handleCallbackResponse(response: any) {
    const res = jwt_decode(response.credential)
    console.log(res)
    setUser(res as Object)
  }
  const [user, setUser] = useState<Object | null>();
  const buttonRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    google.accounts.id.initialize({
      client_id: clientId as string,
      callback: handleCallbackResponse,
    });
    if (buttonRef.current) {
      google.accounts.id.renderButton(buttonRef.current, {
        type: 'standard',
        theme: 'filled_black',
        size: 'large',
        width: '240',
      });
    }
  }, []);


  return (
    <div>
      {!user ? <div className='loginTest' ref={buttonRef}></div>:
            <ButtonSearch
            callBack={() => {
              navigate('/search');
            }}
          ></ButtonSearch>}
    </div>
  );
}

export default Login;
