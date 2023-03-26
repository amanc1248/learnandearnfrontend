import { useState } from "react";
import { ChangePasswordStep1P } from "./ChangePasswordStep1.p";

export const ChangePasswordStep1C = () => {
  // use state
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");

  // functions
  const onChangeNewPassword = (value) => {
    setNewPassword(value);
  };
  const onChangeConfirmNewPassword = (value) => {
    setConfirmNewPassword(value);
  };
  const onChangeCurrentPassword = (value) => {
    setCurrentPassword(value);
  };
  const handleOnSubmit = ()=>{
    
  }
  return (
    <ChangePasswordStep1P
      newPassword={newPassword}
      confirmNewPassword={confirmNewPassword}
      currentPassword={currentPassword}
      onChangeNewPassword={onChangeNewPassword}
      onChangeConfirmNewPassword={onChangeConfirmNewPassword}
      onChangeCurrentPassword={onChangeCurrentPassword}
      handleOnSubmit={handleOnSubmit}
    ></ChangePasswordStep1P>
  );
};
