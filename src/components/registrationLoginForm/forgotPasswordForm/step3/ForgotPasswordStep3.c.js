import React, {useState} from 'react';
import { ForgotPasswordStep2P } from '../step2/ForgotPasswordStep2.p';
import { ForgotPasswordStep3P } from './ForgotPasswordStep3.p';

export const ForgotPasswordStep3C = ({
  changeActiveStep,
  changeForgotPasswordStatus,
})=>{
     // useStates
  const [password, setPassword] = useState();
  const [passwordHealth, setPasswordHealth] = useState();
  const [registerButtonEnabled, setRegisterButtonEnabled] = useState(true);
// functions
const onHandleSubmit = (e) => {
    e.preventDefault();
    changeActiveStep(3);
  };

  const handlePasswordChange = (password) => {
    setPasswordHealth(checkPasswordHealth(password))
    setPassword(password);
  };

  const handleConfirmPasswordChange = (value) => {
      setRegisterButtonEnabled(!(value === password))
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

    return <ForgotPasswordStep3P></ForgotPasswordStep3P>
}