import React, { useState } from 'react';
import { createUser } from "../../../../actions/registration.actions";
import { Step3P } from "./step3.p";

export const Step3C = ({
  showHideRegistrationModal,
  registrationFormDetails,
  changeRegistrationStatus,
}) => {

  // data
  let confirmPassword;
// use states
const [password, setPassword] = useState();
const [passwordHealth, setPasswordHealth] = useState();

// functions
  const onHandleSubmit = (e) => {
    e.preventDefault();
    if(password===confirmPassword){
      const {fullName: name, email} = registrationFormDetails;
      createUser({name, email, password}).then((response)=>{
        showHideRegistrationModal(false);
      }).catch((error)=>{
        changeRegistrationStatus({
          error: true,
          text: error.response.data,
        });
      })
    }else{
      changeRegistrationStatus({
        error: true,
        text: "Password did not match",
      });
    }
  };

  const handlePasswordChange = (password) => {
    setPasswordHealth(checkPasswordHealth(password))
    setPassword(password);
  };

  const handleConfirmPasswordChange = (value) => {
    confirmPassword = value
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
    ></Step3P>
  );
};