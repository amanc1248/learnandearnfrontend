import { LoaderC } from "../../components/loader/loader.c";

export const AuthenticateAdminHOCP = ({
  WrappedComponent,
  isLoggedIn,
  userContextData,
  checkingLoginStatus,
  AdminUserContext,
}) => {
  if (checkingLoginStatus) {
    return <LoaderC></LoaderC>;
  }
  if (isLoggedIn) {
    return (
      <AdminUserContext.Provider value={userContextData}>
        <WrappedComponent></WrappedComponent>
      </AdminUserContext.Provider>
    );
  }
};
