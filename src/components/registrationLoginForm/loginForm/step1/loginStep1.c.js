import { useState } from "react";
import {useNavigate}  from 'react-router-dom';
import { login } from "../../../../actions/login.actions";
import { USER_TOKEN } from "../../../../constants/localstorage.constants";
import { saveToLocalStorage } from "../../../../utils/localStorage.utils";
import { LoginStep1P } from "./loginStep1.p";

export const LoginStep1C = ({
  showHideRegistrationModal,
  showHideRegistrationLoginModal,
  showHideForgotPasswordForm,
  showHideLoginForm,
  handleLoginStatus,
}) => {
  // useStates
  const [loginFormDetails, setLoginFormDetails] = useState({
    email: "",
    password: "",
  });
  const [logginIn, setLogginIn] = useState(false);

  // use navigate
  const navigate = useNavigate();
  // functions
  const onHandleSubmit = (e) => {
    e.preventDefault();
    setLogginIn(true);
    login(loginFormDetails)
      .then((response) => {
        saveToLocalStorage({ key: USER_TOKEN, value: response.data });
        handleLoginStatus({
          error: false,
          text: "Logged in successfully"
        })
        setLogginIn(false);
        navigate("/overview")
      })
      .catch((error) => {
        handleLoginStatus({
          error: true,
          text: error.response.data
        })
      });
  };
  const handleEmailChange = (value) => {
    setLoginFormDetails({
      ...loginFormDetails,
      email: value,
    });
  };
  const handlePasswordChange = (value) => {
    setLoginFormDetails({
      ...loginFormDetails,
      password: value,
    });
  };
  return (
    <LoginStep1P
      loginFormDetails={loginFormDetails}
      logginIn={logginIn}
      onHandleSubmit={onHandleSubmit}
      handleEmailChange={handleEmailChange}
      handlePasswordChange={handlePasswordChange}
      showHideRegistrationModal={showHideRegistrationModal}
      showHideRegistrationLoginModal={showHideRegistrationLoginModal}
      showHideForgotPasswordForm={showHideForgotPasswordForm}
      showHideLoginForm={showHideLoginForm}
    ></LoginStep1P>
  );
};
