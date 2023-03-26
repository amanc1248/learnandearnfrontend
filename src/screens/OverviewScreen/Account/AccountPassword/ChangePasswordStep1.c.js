import { useContext, useState } from "react";
import { changeUserPassword } from "../../../../actions/users.actions";
import { USER_TOKEN_CONSTANT } from "../../../../constants/localstorage.constants";
import { UserContext } from "../../../../HOCs/AuthenticateLogin/AuthenticateLogin.hoc.c";
import { getFromLocalStorage } from "../../../../utils/localStorage.utils";
import { validatePassword } from "../../../../utils/password.utils";
import { ChangePasswordContext } from "./AccountPassword.c";
import { ChangePasswordStep1P } from "./ChangePasswordStep1.p";

export const ChangePasswordStep1C = () => {
  // use state
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [changePasswordStatus, setChangePasswordStatus] = useState({
    error: false,
    text:""
  })

      // use context
      const userContextData = useContext(UserContext);
      const {userDetails} = userContextData
      const {email} = userDetails;
      const {handleIsShowPasswordChange} = useContext(ChangePasswordContext)

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
  const handleOnSubmit = (e)=>{
    e.preventDefault();
    if(newPassword===confirmNewPassword){
      const isValidPasswordResult = validatePassword(newPassword);
      if(isValidPasswordResult===true){
        const token = getFromLocalStorage(USER_TOKEN_CONSTANT);
        changeUserPassword({email, token, newPassword, currentPassword}).then((response)=>{
          setChangePasswordStatus({error: false, text: "Password Changed Successfully"});
          handleIsShowPasswordChange(false)
        }).catch((error)=>{
          setChangePasswordStatus({error: true, text: error});
        })
      }else{
        setChangePasswordStatus({error: true, text:isValidPasswordResult})
      }
    }else{
      setChangePasswordStatus({error: true, text:"Password did not match"})
    }
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
      changePasswordStatus={changePasswordStatus}
    ></ChangePasswordStep1P>
  );
};
