import { useEffect, useState } from "react";
import { checkLogin } from "../../actions/login.actions";
import { USER_TOKEN } from "../../constants/localstorage.constants";
import { HeaderP } from "./header.p";

export const HeaderC = ({
  showRegistrationModal,
  showHideRegistrationModal,
}) => {

// useStates
const [showAccounts, setShowAccounts] = useState(false);
const [isLoggedIn, setIsLoggedIn] = useState(false);
const [userDetails, setUserDetails] = useState(null);

// use effects
useEffect(() => {
  const token = localStorage.getItem(USER_TOKEN);
  if(token){
    checkLogin({ token })
    .then((response) => {
      setUserDetails(response);
      setIsLoggedIn(true);
    })
    .catch((error) => {
      console.log(error);
    });
  }
}, []);

// functions
const handleShowAccounts = (value)=>{
  setShowAccounts(value);
}

  return (
    <HeaderP
      showRegistrationModal={showRegistrationModal}
      showHideRegistrationModal={showHideRegistrationModal}
      handleShowAccounts={handleShowAccounts}
      showAccounts={showAccounts}
      isLoggedIn={isLoggedIn}
      userDetails={userDetails}
    ></HeaderP>
  );
};
