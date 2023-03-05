import { useState } from "react";
import { login } from "../../../../actions/login.actions";
import { saveToLocalStorage } from "../../../../utils/localStorage.utils";
import { LoginStep1P } from "./loginStep1.p";

export const LoginStep1C = ({
  showHideRegistrationModal,
  showHideRegistrationLoginModal,
}) => {
  // useStates
  const [loginFormDetails, setLoginFormDetails] = useState({
    email: "",
    password: "",
  });
  const [logginIn, setLogginIn] = useState(false);

  // functions
  const onHandleSubmit = (e) => {
    e.preventDefault()
    setLogginIn(true);
    login(loginFormDetails).then((response)=>{
      console.log(response);
      saveToLocalStorage({key:"userToken", value:response.data })
      setLogginIn(false);
    }).catch((error)=>{
      console.log(error);
    })
  };
  const handleEmailChange = (value) => {
    setLoginFormDetails({
        ...loginFormDetails,
        email: value,
    })
  };
  const handlePasswordChange = (value) => {
    setLoginFormDetails({
        ...loginFormDetails,
        password: value,
    })
  };
  return <LoginStep1P
  loginFormDetails={loginFormDetails}
  logginIn={logginIn}
  onHandleSubmit={onHandleSubmit}
  handleEmailChange={handleEmailChange}
  handlePasswordChange={handlePasswordChange}
  showHideRegistrationModal={showHideRegistrationModal}
  showHideRegistrationLoginModal={showHideRegistrationLoginModal}
  ></LoginStep1P>;
};
