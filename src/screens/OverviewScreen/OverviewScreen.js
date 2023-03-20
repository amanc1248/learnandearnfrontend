import { AuthenticateLoginHOCC } from "../../HOCs/AuthenticateLogin/AuthenticateLogin.hoc.c";
import { OverviewScreepC } from "./OverviewScreen.c";

export const OverViewScreen = () => {
  return <AuthenticateLoginHOCC
  WrappedComponent={OverviewScreepC}
  ></AuthenticateLoginHOCC>;
};
