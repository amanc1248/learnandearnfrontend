import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkLogin } from "../../actions/login.actions";
import { USER_TOKEN_CONSTANT } from "../../constants/localstorage.constants";
import { getFromLocalStorage } from "../../utils/localStorage.utils";
import { AuthenticateLoginHOCP } from "./AuthenticateLogin.hoc.p";

export const UserContext = createContext()
export const AuthenticateLoginHOCC = ({ WrappedComponent }) => {
  // use states
  const [checkingLoginStatus, setCheckingLoginStatus] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState(null);


  // use navigate
  const navigate = useNavigate();

  // use effects
  useEffect(() => {
    const token = getFromLocalStorage(USER_TOKEN_CONSTANT);
    if (token) {
      setCheckingLoginStatus(true);
      checkLogin({ token })
        .then((response) => {
          setUserDetails(response);
          setIsLoggedIn(true);
          setCheckingLoginStatus(false);
        })
        .catch((error) => {
          setCheckingLoginStatus(false);
          navigate("/");
        });
    } else {
      navigate("/");
    }
  }, []);

  // functions
  const handleUserDetailsChange = (value)=>{
    console.log(value);
    setUserDetails(value)
  }

    // user context data
    const userContextData = {userDetails, handleUserDetailsChange}
  return (
    <AuthenticateLoginHOCP
      WrappedComponent={WrappedComponent}
      isLoggedIn={isLoggedIn}
      userContextData={userContextData}
      checkingLoginStatus={checkingLoginStatus}
      UserContext={UserContext}
      setUserDetails={setUserDetails}
    ></AuthenticateLoginHOCP>
  );
};
