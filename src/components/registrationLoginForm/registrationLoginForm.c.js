import React, { useState } from "react";
import { LoginFormC } from "./loginForm/LoginForm.c";
import { RegistrationFormC } from "./registrationForm/RegistrationForm.c";

export const RegistrationLoginFormComponent = ({
  showRegistrationLoginModal,
  showHideRegistrationLoginModal,
}) => {
  // useStates
  const [showRegistrationForm, setShowRegistrationForm] = useState(true);
  const [showLoginForm, setShowLoginForm] = useState();
  //   functions
  const showHideRegistrationModal = (value) => {
    setShowRegistrationForm(value);
  };

  const showHideLoginForm = (value) => {
    setShowLoginForm(value);
  };

  return (
    <>
      {showRegistrationForm && (
        <RegistrationFormC
          showRegistrationModal={showRegistrationForm}
          showHideRegistrationModal={showHideRegistrationModal}
          showHideLoginForm={showHideLoginForm}
          showHideRegistrationLoginModal={showHideRegistrationLoginModal}
        ></RegistrationFormC>
      )}
      {showLoginForm && (
        <LoginFormC
          showLoginForm={showLoginForm}
          showHideLoginForm={showHideLoginForm}
          showHideRegistrationModal={showHideRegistrationModal}
          showHideRegistrationLoginModal={showHideRegistrationLoginModal}
        ></LoginFormC>
      )}
    </>
  );
};
