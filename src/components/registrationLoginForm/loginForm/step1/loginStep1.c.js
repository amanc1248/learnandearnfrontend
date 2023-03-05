import { useState } from "react";
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
  const onHandleSubmit = () => {};
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
