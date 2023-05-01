import { AuthenticateAdminHOCC } from "../../../HOCs/AuthenticateAdmin/AuthenticateAdmin.hoc.c";
import { AdminDashboardC } from "./AdminDashboard.c";

export const AdminDashboardScreen = () => {
  return (
    <AuthenticateAdminHOCC
      WrappedComponent={AdminDashboardC}
    ></AuthenticateAdminHOCC>
  );
};
