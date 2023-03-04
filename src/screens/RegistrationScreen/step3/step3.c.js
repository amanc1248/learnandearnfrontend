import React, { useState } from 'react';
import { createUser } from "../../../actions/registration.actions";
import { Step3P } from "./step3.p";

export const Step3C = ({
  showHideRegistrationModal,
  registrationFormDetails,
  changeRegistrationStatus,
}) => {

// use states
const [password, setPassword] = useState();
const [passwordHealth, setPasswordHealth] = useState();
const [registerButtonEnabled,setRegisterButtonEnabled] =useState(true);

// functions
  const onHandleSubmit = (e) => {
    e.preventDefault();
    const {fullName: name, email} = registrationFormDetails;
    createUser({name, email, password}).then((response)=>{
      showHideRegistrationModal(false);
    }).catch((error)=>{
      changeRegistrationStatus({
        error: true,
        text: error.response.data,
      });
    })
  };

  const handlePasswordChange = (password) => {
    setPasswordHealth(checkPasswordHealth(password))
    setPassword(password);
  };

  const handleConfirmPasswordChange = (value) => {
    if(value === password){
      setRegisterButtonEnabled(false)
    }
  };

  const checkPasswordHealth = (password)=>{
    if(!password){return ""}
    var strength = 0;
    if (password.match(/[a-z]+/)) {
      strength += 1;
    }
    if (password.match(/[A-Z]+/)) {
      strength += 1;
    }
    if (password.match(/[0-9]+/)) {
      strength += 1;
    }
    if (password.match(/[$@#&!]+/)) {
      strength += 1;
    }
    if (password.length >= 8) {
      strength += 1;
    }
    if (strength < 3) {
      return "password__health__div__weak";
    } else if (strength < 5) {
      return "password__health__div__medium";
    } else {
      return "password__health__div__strong";
    }
  }
  return (
    <Step3P
      onHandleSubmit={onHandleSubmit}
      password={password}
      handlePasswordChange={handlePasswordChange}
      handleConfirmPasswordChange={handleConfirmPasswordChange}
      passwordHealth={passwordHealth}
      registerButtonEnabled={registerButtonEnabled}
    ></Step3P>
  );
};
