import { useContext, useState } from "react";
import { changeEmailOTP } from "../../../../actions/otp.actions";
import { USER_TOKEN_CONSTANT } from "../../../../constants/localstorage.constants";
import { getFromLocalStorage } from "../../../../utils/localStorage.utils";
import { ChangeEmailCContext } from "./ChangeEmail.c";
import { ChangeEmailStep1P } from "./ChangeEmailStep1.p";
export const ChangeEmailStep1C = () => {
  
  // use states
  const [disableButton, setDisableButton] = useState(false);
  const [sendingOTP, setSendingOTP] = useState(false);
  
  // use context
  const changeEmailContext = useContext(ChangeEmailCContext);
  const { changeActiveStep, handleChangeEmailStatus,email, setEmail } = changeEmailContext;

  // functions
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setDisableButton(true);
    setSendingOTP(true);
    const token = getFromLocalStorage(USER_TOKEN_CONSTANT);
    changeEmailOTP({ email, token }).then((response) => {
      handleChangeEmailStatus({
        error: false,
        text: "OTP sent successfully, enter your otp to verify..",
      });
      changeActiveStep(2);
      setDisableButton(false);
      setSendingOTP(false);
    }).catch((error) => {
      setDisableButton(false);
      setSendingOTP(false);
      console.error(error)
    });
  };

  const onChangeEmail = (value) => {
    setEmail(value);
  };
  return (
    <ChangeEmailStep1P
      handleOnSubmit={handleOnSubmit}
      onChangeEmail={onChangeEmail}
      email={email}
      disableButton={disableButton}
      sendingOTP={sendingOTP}
    ></ChangeEmailStep1P>
  );
};
