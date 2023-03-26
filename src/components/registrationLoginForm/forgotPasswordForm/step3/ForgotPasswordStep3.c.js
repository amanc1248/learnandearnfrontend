import React, { useState } from 'react';
import { resetUserPassword } from '../../../../actions/users.actions';
import { validatePassword } from '../../../../utils/password.utils';
import {ForgotPasswordStep3P} from  "./ForgotPasswordStep3.p"
export const ForgotPasswordStep3C = ({
  showHideRegistrationModal,
  email,
  changeForgotPasswordStatus,
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
      if(validatePasswordResult ===true){
        resetUserPassword({email, password}).then((response)=>{
          changeForgotPasswordStatus({
            error: false,
            text: "Password reset successfully",
          });
          showHideRegistrationModal(false);
        }).catch((error)=>{
          changeForgotPasswordStatus({
            error: true,
            text: error.response.data,
          });
        })
      }else{
        changeForgotPasswordStatus({
          error: true,
          text: validatePasswordResult,
        });
      }
    }else{
      changeForgotPasswordStatus({
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
    <ForgotPasswordStep3P
      onHandleSubmit={onHandleSubmit}
      password={password}
      handlePasswordChange={handlePasswordChange}
      handleConfirmPasswordChange={handleConfirmPasswordChange}
    ></ForgotPasswordStep3P>
  );
};
