import { useState } from "react";
import { LoginFormP } from "./LoginForm.p";

export const LoginFormC = ({
  showLoginForm,
  showHideLoginForm,
  showHideRegistrationModal,
  showHideRegistrationLoginModal,
  showHideForgotPasswordForm,
}) => {

  // useStates
  const [loginStatus, setLoginStatus] = useState({
    error: false,
    text: "",
  });

  // functions
  const handleLoginStatus = (status)=>{
    setLoginStatus(status)
  }
  return (
    <LoginFormP
      showLoginForm={showLoginForm}
      showHideLoginForm={showHideLoginForm}
      showHideRegistrationModal={showHideRegistrationModal}
      showHideRegistrationLoginModal={showHideRegistrationLoginModal}
      showHideForgotPasswordForm={showHideForgotPasswordForm}
      handleLoginStatus={handleLoginStatus}
      loginStatus={loginStatus}
    ></LoginFormP>
  );
};
