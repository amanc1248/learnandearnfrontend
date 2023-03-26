import { LoaderC } from "../../components/loader/loader.c";

export const AuthenticateLoginHOCP = ({
  WrappedComponent,
  isLoggedIn,
  userContextData,
  checkingLoginStatus,
  UserContext,
}) => {
  if (checkingLoginStatus) {
    return <LoaderC></LoaderC>;
  }
  if (isLoggedIn) {
    return (
      <UserContext.Provider value={userContextData}>
        <WrappedComponent></WrappedComponent>;
      </UserContext.Provider>
    );
  }
};
