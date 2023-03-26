import React, { useState } from 'react';
import { createUser } from "../../../../actions/registration.actions";
import { validatePassword } from '../../../../utils/password.utils';
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

// functions
  const onHandleSubmit = (e) => {
    e.preventDefault();
    if(password===confirmPassword){
      const validatePasswordResult = validatePassword(password);
      if(validatePasswordResult===true){
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
          text: validatePasswordResult,
        });
      }
    }else{
      changeRegistrationStatus({
        error: true,
        text: "Password did not match",
      });
    }
  };

  const handlePasswordChange = (password) => {
    setPassword(password);
  };

  const handleConfirmPasswordChange = (value) => {
    confirmPassword = value
  };

  return (
    <Step3P
      onHandleSubmit={onHandleSubmit}
      password={password}
      handlePasswordChange={handlePasswordChange}
      handleConfirmPasswordChange={handleConfirmPasswordChange}
    ></Step3P>
  );
};
