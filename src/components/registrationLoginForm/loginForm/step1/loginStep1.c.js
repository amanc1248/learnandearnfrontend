import { useState } from "react";
import { login } from "../../../../actions/login.actions";
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

  // functions
  const onHandleSubmit = (e) => {
    e.preventDefault();
    console.log("iiiii")
    setLogginIn(true);
    login(loginFormDetails)
      .then((response) => {
        console.log(response);
        saveToLocalStorage({ key: "userToken", value: response.data });
        handleLoginStatus({
          error: false,
          text: "Logged in successfully"
        })
        setLogginIn(false);
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
