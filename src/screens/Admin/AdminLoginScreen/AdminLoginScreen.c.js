import { useState } from "react";
import { AdminLoginScreenP } from "./AdminLoginScreen.p";
import { adminLogin } from "../../../actions/admin.actions";
import { saveToLocalStorage } from "../../../utils/localStorage.utils";
import { ADMIN_TOKEN_CONSTANT } from "../../../constants/localstorage.constants";

export const AdminLoginScreenC = () => {
  // usestates
  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });
  const [loggingIn, setLoggingIn] = useState(false);
  const [loginStatus, setLoginStatus] = useState({isError:false,statusText:""});

  // functions
  const onEmailChange = (value) => {
    setLoginDetails({ ...loginDetails, email: value });
  };

  const onPasswordChange = (value) => {
    setLoginDetails({ ...loginDetails, password: value });
  };
  
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setLoggingIn(true);
    const { email, password } = loginDetails;
    adminLogin({ email, password })
      .then((response) => {
        console.log(response);
        saveToLocalStorage({ key: ADMIN_TOKEN_CONSTANT, value: response });
        setLoggingIn(false);
        setLoginStatus({isError:false,statusText:"Logged In Successfully"})
      })
      .catch((error) => {
        console.error(error);
        setLoggingIn(false);
        setLoginStatus({isError:true,statusText:error})
      });
  };
  return (
    <AdminLoginScreenP
      loggingIn={loggingIn}
      handleOnSubmit={handleOnSubmit}
      onEmailChange={onEmailChange}
      onPasswordChange={onPasswordChange}
      loginStatus={loginStatus}
    ></AdminLoginScreenP>
  );
};
