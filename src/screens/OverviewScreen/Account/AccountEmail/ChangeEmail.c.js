import { createContext, useState } from "react";
import { ChangeEmailP } from "./ChangeEmail.p";
export const ChangeEmailCContext = createContext();
export const ChangeEmailC = ({ handleOnChange }) => {

  // use states
  const [email, setEmail] = useState("");
  const [activeStep, setActiveStep] = useState(1);
  const [changeEmailStatus, setChangeEmailStatus] = useState({
    error: false,
    text: "",
  });

  // functions
  const changeActiveStep = (value) => {
    setActiveStep(value);
  };
  const handleChangeEmailStatus = ({ error, text }) => {
    setChangeEmailStatus({ error, text });
  };

  // create Context value
  const createContextValue = {
    changeActiveStep,
    handleChangeEmailStatus,
    email,
    setEmail,
    showHideChangeEmailDiv: handleOnChange,
  };
  
  return (
    <ChangeEmailCContext.Provider value={createContextValue}>
      <ChangeEmailP
        activeStep={activeStep}
        changeActiveStep={changeActiveStep}
        handleOnChange={handleOnChange}
        handleChangeEmailStatus={handleChangeEmailStatus}
        changeEmailStatus={changeEmailStatus}
      ></ChangeEmailP>
    </ChangeEmailCContext.Provider>
  );
};
