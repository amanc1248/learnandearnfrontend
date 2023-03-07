import React, { useState } from "react";
import { sendOTP } from "../../../../actions/registration.actions";
import { ForgotPasswordStep1P } from "./ForgtoPasswordStep1.p";
export const ForgotPasswordStep1C = ({
  showHideRegistrationModal,
  showHideRegistrationLoginModal,
  changeActiveStep,
  changeForgotPasswordStatus,
  email,
  handleOnEmailChange
}) => {
  // useStates
  const [sendingOTP, setSendingOTP] = useState(false);

  // functions
  const onHandleSubmit = (e) => {
    e.preventDefault();
    setSendingOTP(true);
    sendOTP({ email })
      .then((response) => {
        changeForgotPasswordStatus({
          error: false,
          text: "OTP successfully sent to your email. Enter otp here...",
        });
        changeActiveStep(2);
      })
      .catch((error) => {
        changeForgotPasswordStatus({
          error: true,
          text: "Something went wrong. Please try again!",
        });
        setSendingOTP(false);
      });
  };

  return (
    <ForgotPasswordStep1P
      onHandleSubmit={onHandleSubmit}
      email={email}
      sendingOTP={sendingOTP}
      handleOnEmailChange={handleOnEmailChange}
      showHideRegistrationModal={showHideRegistrationModal}
      showHideRegistrationLoginModal={showHideRegistrationLoginModal}
      changeActiveStep={changeActiveStep}
    ></ForgotPasswordStep1P>
  );
};
