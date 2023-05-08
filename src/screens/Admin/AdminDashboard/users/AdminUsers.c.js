import { useEffect, useState } from "react";
import { AdminUsersP } from "./AdminUsers.p";
import { allUsersAdmin } from "../../../../actions/admin.actions";
import { getFromLocalStorage } from "../../../../utils/localStorage.utils";
import { ADMIN_TOKEN_CONSTANT } from "../../../../constants/localstorage.constants";

export const AdminUsersC = () => {
  // use states
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(false);

  // useEffect
  useEffect(() => {
    const adminToken = getFromLocalStorage(ADMIN_TOKEN_CONSTANT);
    setLoading(true);
    allUsersAdmin({ adminToken })
      .then((response) => {
        setUsers(response);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);
  return <AdminUsersP users={users} loading={loading}></AdminUsersP>;
};
