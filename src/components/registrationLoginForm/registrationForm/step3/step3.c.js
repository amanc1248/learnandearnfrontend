import React, { useEffect, useState } from "react";
import { createUser } from "../../../../actions/registration.actions";
import { validatePassword } from "../../../../utils/password.utils";
import { Step3P } from "./step3.p";
import { useNavigate } from "react-router-dom";
import { login } from "../../../../actions/login.actions";
import { saveToLocalStorage } from "../../../../utils/localStorage.utils";
import { USER_TOKEN_CONSTANT } from "../../../../constants/localstorage.constants";

export const Step3C = ({
  showHideRegistrationModal,
  registrationFormDetails,
  changeRegistrationStatus,
}) => {
  // data
  let confirmPassword;

  // navigate
  const navigate = useNavigate();
  // use states
  const [password, setPassword] = useState();
  const [registering, setRegistering] = useState(null);
  const [successRegistration, setSuccessRegistration] = useState(false);

  // functions
  const onHandleSubmit = async (e) => {
    setRegistering(true);
    e.preventDefault();
    if (password === confirmPassword) {
      const validatePasswordResult = validatePassword(password);
      if (validatePasswordResult === true) {
        const { fullName: name, email } = registrationFormDetails;
        await createUser({ name, email, password })
          .then((response) => {
            // setRegistering(false);
            // setPassword('');
            // confirmPassword='';
            // showHideRegistrationModal(false);
            // changeRegistrationStatus({
            //   error: true,
            //   text: "Account Registered Successfully.",
            // });
            // setSuccessRegistration(true)
            // navigate("/overview")
            login({ email, password })
              .then((loginResponse) => {
                saveToLocalStorage({
                  key: USER_TOKEN_CONSTANT,
                  value: loginResponse.data,
                });
                navigate("/overview");
              })
              .catch((loginError) => {
                console.error(loginError);
              });
          })
          .catch((error) => {
            setRegistering(false);
            setSuccessRegistration(true);
            changeRegistrationStatus({
              error: true,
              text: error?.response?.data,
            });
          });
      } else {
        setRegistering(false);
        changeRegistrationStatus({
          error: true,
          text: validatePasswordResult,
        });
      }
    } else {
      setRegistering(false);
      changeRegistrationStatus({
        error: true,
        text: "Password did not match",
      });
    }
  };

  const handlePasswordChange = (password) => {
    setPassword(password);
  };

  const handleConfirmPasswordChange = (value) => {
    confirmPassword = value;
  };

  return (
    <Step3P
      onHandleSubmit={onHandleSubmit}
      password={password}
      handlePasswordChange={handlePasswordChange}
      handleConfirmPasswordChange={handleConfirmPasswordChange}
      registering={registering}
    ></Step3P>
  );
};
