import React from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function Login() {
  const onSuccess = (res: any) => {
    console.log('LOGIN SUCCESS', res.profileObj);
  };

  const onFailure = (res: any) => {
    console.log('LOGIN FAILED', res);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId as string}
        buttonText='Login'
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      ></GoogleLogin>
    </div>
  );
}

export default Login;
