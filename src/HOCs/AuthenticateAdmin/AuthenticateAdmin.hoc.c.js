import { createContext, useEffect, useState } from "react";
import { AuthenticateAdminHOCP } from "./AuthenticateAdmin.hoc.p";
import { useNavigate } from "react-router-dom";
import { getFromLocalStorage } from "../../utils/localStorage.utils";
import { ADMIN_TOKEN_CONSTANT } from "../../constants/localstorage.constants";
import { checkLogin } from "../../actions/login.actions";

export const adminUserContext = createContext();
export const AuthenticateAdminHOCC = ({ WrappedComponent }) => {
  // use states
  const [checkingLoginStatus, setCheckingLoginStatus] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState(null);

  // use navigate
  const navigate = useNavigate();

  // use effects
  useEffect(() => {
    const token = getFromLocalStorage(ADMIN_TOKEN_CONSTANT);
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
          navigate("/admin/login");
        });
    } else {
      navigate("/admin/login");
    }
  }, []);

  // functions
  const handleUserDetailsChange = (value) => {
    setUserDetails(value);
  };

  // user context data
  const userContextData = { userDetails, handleUserDetailsChange };
  return (
    <AuthenticateAdminHOCP
      WrappedComponent={WrappedComponent}
      isLoggedIn={isLoggedIn}
      userContextData={userContextData}
      checkingLoginStatus={checkingLoginStatus}
      setUserDetails={setUserDetails}
      AdminUserContext={adminUserContext}
    ></AuthenticateAdminHOCP>
  );
};
