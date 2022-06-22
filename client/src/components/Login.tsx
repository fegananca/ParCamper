import React from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId;

function Login() {
  const onSuccess = (res: any) => {
    console.log('Login hola', res);
  };

  const onFailure = (res: any) => {
    console.log('Login adios', res);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId as string}
        buttonText='Login'
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
      ></GoogleLogin>
    </div>
  );
}

export default Login;
