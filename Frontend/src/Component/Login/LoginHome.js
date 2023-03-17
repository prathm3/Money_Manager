import React, { useState } from "react";
import Login from "./Login.js";
// import { Register } from "./Register.jsx";
import { ForgotPass } from "./ForgotPass.jsx";
import { LoadingPage } from "./LoadingPage.jsx";
import { AddNewTransaction } from "./AddNewTransaction";

function LoginHome() {
  const [currentForm, setCurrentForm] = useState("login");
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };
  const renderForm = () => {
    if (currentForm === "login") {
      return (
        <Login
          onFormSwitch={toggleForm}
          onForgotPass={() => setCurrentForm("forgotPass")}
        />
      );
    } else if (currentForm === "register") {
      // return <Register onFormSwitch={toggleForm} />;
    } else if (currentForm === "forgotPass") {
      return <ForgotPass onFormSwitch={toggleForm} />;
    }
  };

  return (
    <>
      <header className="Header">
        <h2>Welcome to the money manager</h2>
      </header>
      <body>
        <div className="Slogan">
          <h4>A simple way to manage and track your personal finances</h4>
        </div>
        <div className="App">{renderForm()}</div>
        <hr></hr>
      </body>
    </>
  );
}

export default LoginHome;
