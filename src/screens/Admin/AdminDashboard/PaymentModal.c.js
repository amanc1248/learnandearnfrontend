import { useEffect, useState } from "react";
import { PaymentModalP } from "./PaymentModal.p";
import { getFromLocalStorage } from "../../../utils/localStorage.utils";
import { ADMIN_TOKEN_CONSTANT } from "../../../constants/localstorage.constants";
import { paymentByIdAdmin } from "../../../actions/admin.actions";

export const PaymentModalC = ({ paymentId, showModal, changeShowModal }) => {
  // use states
  const [payment, setPayment] = useState();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);

  // use effect
  useEffect(() => {
    const adminToken = getFromLocalStorage(ADMIN_TOKEN_CONSTANT);
    setLoading(true);
    paymentByIdAdmin({ adminToken, _id: paymentId })
      .then((response) => {
        setPayment(response);
        setUser(response?.userId);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <PaymentModalP
      paymentId={paymentId}
      payment={payment}
      user={user}
      loading={loading}
      showModal={showModal}
      changeShowModal={changeShowModal}
    ></PaymentModalP>
  );
};
