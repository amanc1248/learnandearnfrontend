import React, { useState } from "react";
import { ForgotPasswordFormP } from "./ForgotPasswordForm.p";

export const ForgotPasswordFormC = ({
  showForgotPasswordForm,
  showHideForgotPasswordForm,
  showHideRegistrationModal,
  showHideRegistrationLoginModal,
  showHideLoginForm,
}) => {
  // useStates
  const [email, setEmail] = useState('');
  const [activeStep, setActiveStep] = useState(1);
  const [forgotPasswordStatus, setForgotPasswordStatus] = useState({
    error: false,
    text: "",
  });

  // functions
  const changeActiveStep = (step) => {
    setActiveStep(step);
  };
  const changeForgotPasswordStatus = (status) => {
    setForgotPasswordStatus(status);
  };
  const handleOnEmailChange =(value)=>{
    setEmail(value)
  }
  return (
    <ForgotPasswordFormP
      showForgotPasswordForm={showForgotPasswordForm}
      showHideForgotPasswordForm={showHideForgotPasswordForm}
      showHideRegistrationModal={showHideRegistrationModal}
      showHideRegistrationLoginModal={showHideRegistrationLoginModal}
      showHideLoginForm={showHideLoginForm}
      activeStep={activeStep}
      changeActiveStep={changeActiveStep}
      changeForgotPasswordStatus={changeForgotPasswordStatus}
      forgotPasswordStatus={forgotPasswordStatus}
      email={email}
      handleOnEmailChange={handleOnEmailChange}
    ></ForgotPasswordFormP>
  );
};
