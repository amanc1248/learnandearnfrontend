import { createContext, useState } from "react";
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
