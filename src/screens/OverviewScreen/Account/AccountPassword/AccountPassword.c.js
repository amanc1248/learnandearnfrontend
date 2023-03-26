import { useState } from "react";
import { AccountPasswordP } from "./AccountPassword.p";

export const AccountPasswordC = () => {
  // use states
  const [isShowPasswordChange, setIsShowPasswordChange] = useState(false);

  // functions
  const handleIsShowPasswordChange = (value) => {
    setIsShowPasswordChange(value);
  };
  return (
    <AccountPasswordP
      isShowPasswordChange={isShowPasswordChange}
      handleIsShowPasswordChange={handleIsShowPasswordChange}
    ></AccountPasswordP>
  );
};
