import { useEffect, useState } from "react";
import { PaymentModalP } from "./PaymentModal.p";
import { getFromLocalStorage } from "../../../utils/localStorage.utils";
import { ADMIN_TOKEN_CONSTANT } from "../../../constants/localstorage.constants";
import {
  paymentByIdAdmin,
  updatePaymentByIdAdmin,
} from "../../../actions/admin.actions";

export const PaymentModalC = ({ paymentId, showModal, changeShowModal }) => {
  // use states
  const [payment, setPayment] = useState();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  const [changePaymentStatus, setChangePaymentStatus] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState("verified");
  const [updatingPayment, setUpdatingPayment] = useState(false);

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
  }, [refresh]);

  // FUNCTIONS
  // 1. when change status button is clicked
  const handleChangePaymentStatus = (value) => {
    setChangePaymentStatus(value);
  };

  // 2. when save button is clicked after changing the status
  const handleOnSavePaymentStatus = (value, e) => {
    e.preventDefault();
    const adminToken = getFromLocalStorage(ADMIN_TOKEN_CONSTANT);
    setUpdatingPayment(true);
    updatePaymentByIdAdmin({
      adminToken,
      reviewStatus: value,
      id: paymentId,
    })
      .then((response) => {
        console.log(response);
        setRefresh(!refresh);
        setUpdatingPayment(false);
      })
      .catch((error) => {
        console.error(error);
        setUpdatingPayment(false);
      });
  };

  // 3. handle when payment status is changing
  const handleOnChangePaymentStatus = (value) => {
    setPaymentStatus(value);
  };
  return (
    <PaymentModalP
      paymentId={paymentId}
      payment={payment}
      user={user}
      loading={loading}
      showModal={showModal}
      changeShowModal={changeShowModal}
      handleChangePaymentStatus={handleChangePaymentStatus}
      changePaymentStatus={changePaymentStatus}
      handleOnSavePaymentStatus={handleOnSavePaymentStatus}
      updatingPayment={updatingPayment}
      handleOnChangePaymentStatus={handleOnChangePaymentStatus}
      paymentStatus={paymentStatus}
    ></PaymentModalP>
  );
};
