import { useContext, useState } from "react";
import { UserContext } from "../../../../HOCs/AuthenticateLogin/AuthenticateLogin.hoc.c";
import { AccountEmailP } from "./AccountEmail.p";

export const AccountEmailC = () => {
  // useState
  const [changeEmail, setChangeEmail] = useState(false);
  // use context
  const userDetails = useContext(UserContext);

  return (
    <AccountEmailP
      email={userDetails?.email}
      changeEmail={changeEmail}
    ></AccountEmailP>
  );
};
