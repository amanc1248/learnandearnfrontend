import { useContext } from "react";
import { UserContext } from "../../../../HOCs/AuthenticateLogin/AuthenticateLogin.hoc.c";
import { AccountEmailP } from "./AccountEmail.p"

export const AccountEmailC = ()=>{

    // use context
  const userDetails = useContext(UserContext);

    return <AccountEmailP email={userDetails?.email}></AccountEmailP>
}