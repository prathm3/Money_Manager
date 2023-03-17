import React from "react";
import GoogleLogin from "react-google-login";
function GLogin() {
  const responseGoogle = (response) => {
    console.log(response.get);
  };
  return (
    <GoogleLogin
      clientId="89722346030-1agaa92j63ih8dblir5ngbspmca09faq.apps.googleusercontent.com"
      buttonText="Login with Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy="single_host_origin"
    />
  );
}

export default GLogin;
