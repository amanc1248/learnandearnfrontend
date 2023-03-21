import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkLogin } from "../../actions/login.actions";
import { USER_TOKEN } from "../../constants/localstorage.constants";
import { AuthenticateLoginHOCP } from "./AuthenticateLogin.hoc.p";

export const AuthenticateLoginHOCC = ({ WrappedComponent }) => {
  // use states
  const [checkingLoginStatus, setCheckingLoginStatus] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState(null);

  // use navigate
  const navigate = useNavigate();

  // use effects
  useEffect(() => {
    const token = localStorage.getItem(USER_TOKEN);
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

  return (
    <AuthenticateLoginHOCP
      WrappedComponent={WrappedComponent}
      isLoggedIn={isLoggedIn}
      userDetails={userDetails}
      checkingLoginStatus={checkingLoginStatus}
    ></AuthenticateLoginHOCP>
  );
};
