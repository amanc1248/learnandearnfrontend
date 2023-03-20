import { LoaderC } from "../../components/loader/loader.c";
import { RedirectingC } from "../../components/redirecting/redirecting.c";

export const AuthenticateLoginHOCP = ({
  WrappedComponent,
  isLoggedIn,
  userDetails,
  checkingLoginStatus,
}) => {
  if (checkingLoginStatus) {
    return <LoaderC></LoaderC>;
  }
  if(isLoggedIn){
    return <WrappedComponent userDetails={userDetails}></WrappedComponent>;
  }
};
