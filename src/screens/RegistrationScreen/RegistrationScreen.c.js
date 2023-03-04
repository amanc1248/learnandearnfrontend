import React, { useState } from "react";
import { RegistrationScreenP } from "./RegistrationScreen.p";

export const RegistrationScreenC = ({
  showRegistrationModal,
  showHideRegistrationModal,
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
    <RegistrationScreenP
      showRegistrationModal={showRegistrationModal}
      showHideRegistrationModal={showHideRegistrationModal}
      activeStep={activeStep}
      changeActiveStep={changeActiveStep}
      registrationStatus={registrationStatus}
      changeRegistrationStatus={changeRegistrationStatus}
      registrationFormDetails={registrationFormDetails}
      setRegistrationFormDetails={setRegistrationFormDetails}
    ></RegistrationScreenP>
  );
};
