import { useEffect, useState } from "react";
import { AdminPaymentsP } from "./AdminPayments.p";
import { paymentAllAdmin } from "../../../../actions/admin.actions";
import { getFromLocalStorage } from "../../../../utils/localStorage.utils";
import { ADMIN_TOKEN_CONSTANT } from "../../../../constants/localstorage.constants";

export const AdminPaymentsC = () => {
  // use states
  const [payments, setPayments] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // use effects
  useEffect(() => {
    const adminToken = getFromLocalStorage(ADMIN_TOKEN_CONSTANT);
    paymentAllAdmin({ adminToken })
      .then((response) => {
        setPayments(response);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <AdminPaymentsP
      payments={payments}
      loading={loading}
      error={error}
    ></AdminPaymentsP>
  );
};