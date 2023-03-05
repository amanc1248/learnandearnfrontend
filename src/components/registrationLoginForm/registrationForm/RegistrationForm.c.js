import React, { useState } from "react";
import { RegistrationFormP } from "./RegistrationForm.p";

export const RegistrationFormC = ({
  showRegistrationModal,
  showHideRegistrationModal,
  showHideLoginForm,
  showHideRegistrationLoginModal,
}) => {
  // useStates
  const [registrationFormDetails, setRegistrationFormDetails] = useState({
    fullName: "",
    email: "",
  });
  const [activeStep, setActiveStep] = useState(1);
  const [registrationStatus, setRegistrationStatus] = useState({
    error: false,
    text: "",
  });

  // functions
  const changeActiveStep = (step) => {
    setActiveStep(step);
  };
  const changeRegistrationStatus = (status) => {
    setRegistrationStatus(status);
  };
  return (
    <RegistrationFormP
      showRegistrationModal={showRegistrationModal}
      showHideRegistrationModal={showHideRegistrationModal}
      activeStep={activeStep}
      changeActiveStep={changeActiveStep}
      registrationStatus={registrationStatus}
      changeRegistrationStatus={changeRegistrationStatus}
      registrationFormDetails={registrationFormDetails}
      setRegistrationFormDetails={setRegistrationFormDetails}
      showHideLoginForm={showHideLoginForm}
      showHideRegistrationLoginModal={showHideRegistrationLoginModal}
    ></RegistrationFormP>
  );
};
