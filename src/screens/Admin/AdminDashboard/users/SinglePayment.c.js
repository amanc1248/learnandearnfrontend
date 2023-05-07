import { useState } from "react";
import { SinglePaymentPUser } from "./SinglePayment.p";

export const SinglePaymentCUser = ({ payment }) => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  // functions
  const changeShowPaymentModal = (value) => {
    setShowPaymentModal(value);
  };
  return (
    <SinglePaymentPUser
    payment={payment}
      showPaymentModal={showPaymentModal}
      changeShowPaymentModal={changeShowPaymentModal}
    ></SinglePaymentPUser>
  );
};
