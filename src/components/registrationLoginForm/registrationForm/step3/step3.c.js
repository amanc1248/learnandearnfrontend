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
const [registering, setRegistering] = useState(null); 

// functions
  const onHandleSubmit = (e) => {
    setRegistering(true);
    e.preventDefault();
    if(password===confirmPassword){
      const validatePasswordResult = validatePassword(password);
      if(validatePasswordResult===true){
        const {fullName: name, email} = registrationFormDetails;
        createUser({name, email, password}).then((response)=>{
          setRegistering(false);
          setPassword('');
          confirmPassword='';
          showHideRegistrationModal(false);
          changeRegistrationStatus({
            error: true,
            text: "Account Registered Successfully.",
          });
        }).catch((error)=>{
          setRegistering(false);
          changeRegistrationStatus({
            error: true,
            text: error.response.data,
          });
        })
      }else{
        setRegistering(false);
        changeRegistrationStatus({
          error: true,
          text: validatePasswordResult,
        });
      }
    }else{
      setRegistering(false);
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
      registering = {registering}
    ></Step3P>
  );
};
