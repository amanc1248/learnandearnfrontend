import React, { useState } from "react";
import { ForgotPasswordFormC } from "./forgotPasswordForm/ForgotPasswordForm.c";
import { ForgotPasswordFormP } from "./forgotPasswordForm/ForgotPasswordForm.p";
import { LoginFormC } from "./loginForm/LoginForm.c";
import { RegistrationFormC } from "./registrationForm/RegistrationForm.c";

export const RegistrationLoginFormComponent = ({
  showRegistrationLoginModal,
  showHideRegistrationLoginModal,
}) => {
  // useStates
  const [showRegistrationForm, setShowRegistrationForm] = useState(true);
  const [showLoginForm, setShowLoginForm] = useState();
  const [showForgotPasswordForm, setShowForgotPasswordForm] = useState();

  //   functions
  const showHideRegistrationModal = (value) => {
    setShowRegistrationForm(value);
  };

  const showHideLoginForm = (value) => {
    setShowLoginForm(value);
  };

  const showHideForgotPasswordForm = (value) => {
    setShowForgotPasswordForm(value);
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
          showHideForgotPasswordForm={showHideForgotPasswordForm}
        ></LoginFormC>
      )}

      {showForgotPasswordForm && (
        <ForgotPasswordFormC
          showForgotPasswordForm={showForgotPasswordForm}
          showHideForgotPasswordForm={showHideForgotPasswordForm}
          showHideLoginForm={showHideLoginForm}
          showHideRegistrationModal={showHideRegistrationModal}
          showHideRegistrationLoginModal={showHideRegistrationLoginModal}
        ></ForgotPasswordFormC>
      )}
    </>
  );
};
