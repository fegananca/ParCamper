import React from 'react';
import './Login.css';
import { useEffect, useRef } from 'react';
const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function Login() {
  function handleCallbackResponse(response: any) {
    console.log(response);
  }

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
      HOLA
      <div className='loginTest' ref={buttonRef}></div>
    </div>
  );
}

export default Login;
