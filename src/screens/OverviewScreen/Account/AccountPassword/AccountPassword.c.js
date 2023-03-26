import { createContext, useContext, useState } from "react";
import { UserContext } from "../../../../HOCs/AuthenticateLogin/AuthenticateLogin.hoc.c";
import { AccountPasswordP } from "./AccountPassword.p";
export const ChangePasswordContext = createContext();
export const AccountPasswordC = () => {
  // use states
  const [isShowPasswordChange, setIsShowPasswordChange] = useState(false);

  // functions
  const handleIsShowPasswordChange = (value) => {
    setIsShowPasswordChange(value);
  };

    // create context value
    const createContextValue = {
      handleIsShowPasswordChange
    };
  return (
    <ChangePasswordContext.Provider value={createContextValue}>
      <AccountPasswordP
        isShowPasswordChange={isShowPasswordChange}
        handleIsShowPasswordChange={handleIsShowPasswordChange}
      ></AccountPasswordP>
    </ChangePasswordContext.Provider>
  );
};
