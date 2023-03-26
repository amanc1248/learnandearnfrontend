import { useContext, useState } from "react";
import { UserContext } from "../../../../HOCs/AuthenticateLogin/AuthenticateLogin.hoc.c";
import { AccountEmailP } from "./AccountEmail.p";

export const AccountEmailC = () => {
  // useState
  const [changeEmail, setChangeEmail] = useState(false);

  // use context
  const userContextData = useContext(UserContext);
  const {userDetails} = userContextData

  // functions
  const handleOnChange = (value) => {
    setChangeEmail(value);
  };
  return (
    <AccountEmailP
      email={userDetails?.email}
      changeEmail={changeEmail}
      handleOnChange={handleOnChange}
    ></AccountEmailP>
  );
};
