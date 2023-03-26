import React, { useState } from "react";
import { verifyOTP } from "../../../../actions/registration.actions";
import { ForgotPasswordStep2P } from "./ForgotPasswordStep2.p";
export const ForgotPasswordStep2C = ({
  changeActiveStep,
  changeForgotPasswordStatus,
  email,
}) => {
  // useStates
  const [otp, setOtp] = useState("");

  // functions
  const onHandleSubmit = (e) => {
    e.preventDefault();
    verifyOTP({otp,email }).then((response)=>{
      changeForgotPasswordStatus({
        error: false,
        text:"OTP verified successfully. Enter new password here..."
      })
      changeActiveStep(3);
    }).catch((error)=>{
      changeForgotPasswordStatus({
        error: true,
        text:error.response.data
      });
      console.log(error)
    })
  };

  const handleOTPChange = (value) => {
    setOtp(value);
  };
  const handleOnBack = (e) => {
    changeActiveStep(1);
    changeForgotPasswordStatus({
      error: false,
      text: "",
    });
  };
  return (
    <ForgotPasswordStep2P
      onHandleSubmit={onHandleSubmit}
      handleOTPChange={handleOTPChange}
      handleOnBack={handleOnBack}
      otp={otp}
      email={email}
    ></ForgotPasswordStep2P>
  );
};
