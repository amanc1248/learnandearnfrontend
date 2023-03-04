import React, { useState } from "react";
import { verifyOTP } from "../../../actions/registration.actions";
import { Step2P } from "./step2.p";

export const Step2C = ({
  changeActiveStep,
  changeRegistrationStatus,
  registrationFormDetails,
}) => {
  // use states
  const [otp, setOTP] = useState("");
  const [verifying, setVerifying] = useState(false);

  // functions
  const onHandleBack = (e) => {
    e.preventDefault();
    changeActiveStep(1);
    changeRegistrationStatus({
      error: false,
      text: "",
    });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    const {email } = registrationFormDetails;
    verifyOTP({ otp, email })
      .then((response) => {
        changeRegistrationStatus({
          error: false,
          text: "OTP verificaition successfull. Create password here...",
        });
        changeActiveStep(3);
      })
      .catch((error) => {
        changeRegistrationStatus({
          error: true,
          text: "Invalid OTP",
        });
        console.log(error);
      });
  };

  const handleOTPChange = (value) => {
    setOTP(value);
  };
  return (
    <Step2P
      changeActiveStep={changeActiveStep}
      changeRegistrationStatus={changeRegistrationStatus}
      onHandleBack={onHandleBack}
      onHandleSubmit={onHandleSubmit}
      handleOTPChange={handleOTPChange}
      otp={otp}
    ></Step2P>
  );
};
