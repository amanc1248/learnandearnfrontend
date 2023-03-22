import { LoaderC } from "../../components/loader/loader.c";

export const AuthenticateLoginHOCP = ({
  WrappedComponent,
  isLoggedIn,
  userDetails,
  checkingLoginStatus,
  UserContext,
}) => {
  if (checkingLoginStatus) {
    return <LoaderC></LoaderC>;
  }
  if (isLoggedIn) {
    return (
      <UserContext.Provider value={userDetails}>
        <WrappedComponent></WrappedComponent>;
      </UserContext.Provider>
    );
  }
};
