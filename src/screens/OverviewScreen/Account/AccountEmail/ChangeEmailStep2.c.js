import { useContext, useState } from "react";
import { verifyOTP } from "../../../../actions/registration.actions";
import { changeUserEmail } from "../../../../actions/users.actions";
import { USER_TOKEN_CONSTANT } from "../../../../constants/localstorage.constants";
import { UserContext } from "../../../../HOCs/AuthenticateLogin/AuthenticateLogin.hoc.c";
import { getFromLocalStorage, saveToLocalStorage } from "../../../../utils/localStorage.utils";
import { ChangeEmailCContext } from "./ChangeEmail.c";
import { ChangeEmailStep2P } from "./ChangeEmailStep2.p";

export const ChangeEmailStep2C = () => {
  // use states
  const [otp, setOtp] = useState();
  const [disabledButton, setDisabledButton] = useState();
  const [verifyingOTP, setVerifyingOTP] = useState();
  const [changingEmail, setChangingEmail] = useState();

  // use context
  const changeEmailContext = useContext(ChangeEmailCContext);
  const { email, handleChangeEmailStatus, showHideChangeEmailDiv } = changeEmailContext;
  const userContextData = useContext(UserContext);
  const {userDetails, handleUserDetailsChange} = userContextData;
  const {_id, email: oldEmail} = userDetails;

  // functions
  const handleOTPChange = (value) => {
    setOtp(value);
  };

  const handleSubmit = async(e) => {
    try{
      e.preventDefault();
      setDisabledButton(true);
      setVerifyingOTP(true);
      const isValidOTP = await verifyOTP({ otp, email });
      if(isValidOTP){
        handleChangeEmailStatus({
          error: false,
          text: "OTP verified successfully.",
        });
        setVerifyingOTP(false);
      };
      setChangingEmail(true);
      const token = getFromLocalStorage(USER_TOKEN_CONSTANT);
      const updatedEmail = await changeUserEmail({id:_id, email:oldEmail, newEmail:email, token });
      if(updatedEmail){
        handleChangeEmailStatus({
          error: false,
          text: "Email Changed Successfully",
        });
        setChangingEmail(false);
        const {updatedUser, jwt} =updatedEmail;
        handleUserDetailsChange(updatedUser);
        saveToLocalStorage({key:USER_TOKEN_CONSTANT, value:jwt});
        showHideChangeEmailDiv(false);
      }
    }catch(error){
      handleChangeEmailStatus({
        error: true,
        text:"Invalid OTP",
      });
      setDisabledButton(false);
      setVerifyingOTP(false);
    }
  };

  return (
    <ChangeEmailStep2P
      otp={otp}
      handleOTPChange={handleOTPChange}
      handleSubmit={handleSubmit}
      disabledButton={disabledButton}
      verifyingOTP={verifyingOTP}
      changingEmail={changingEmail}
    ></ChangeEmailStep2P>
  );
};
