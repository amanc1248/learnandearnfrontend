import React, {useState} from 'react';
import { sendOTP } from "../../../../actions/registration.actions";
import { Step1P } from "./step1.p";

export const Step1C = ({
  showHideRegistrationModal,
  changeActiveStep,
  changeRegistrationStatus,
  registrationFormDetails,
  setRegistrationFormDetails,
  showHideRegistrationLoginModal,
}) => {
  // use states
  const [sendingOTP, setSendingOTP] = useState(false);

  // functions
  const onHandleSubmit = (e) => {
    e.preventDefault();
    setSendingOTP(true);
    sendOTP({email: registrationFormDetails.email})
      .then((response) => {
        changeActiveStep(2);
        changeRegistrationStatus({
          error: false,
          text: "OTP successfully sent to your email. Enter your OTP here.",
        });
      })
      .catch((err) => {
        changeRegistrationStatus({
          error: true,
          text: "Something went wrong. Please try again!",
        });
        setSendingOTP(false);
      });
  };

  const handleFullNameChange = (value) => {
    setRegistrationFormDetails({
      ...registrationFormDetails,
      fullName: value,
    });
  };

  const handleEmailChange = (value) => {
    setRegistrationFormDetails({
      ...registrationFormDetails,
      email: value,
    });
  };
  return (
    <Step1P
      showHideRegistrationModal={showHideRegistrationModal}
      onHandleSubmit={onHandleSubmit}
      registrationFormDetails={registrationFormDetails}
      handleFullNameChange={handleFullNameChange}
      handleEmailChange={handleEmailChange}
      sendingOTP={sendingOTP}
      showHideRegistrationLoginModal={showHideRegistrationLoginModal}
    ></Step1P>
  );
};
