import { useState } from "react";
import { SinglePaymentP } from "./SinglePayment.p";

export const SinglePaymentC = ({ payment }) => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  // functions
  const changeShowPaymentModal = (value) => {
    setShowPaymentModal(value);
  };
  return (
    <SinglePaymentP
    payment={payment}
      showPaymentModal={showPaymentModal}
      changeShowPaymentModal={changeShowPaymentModal}
    ></SinglePaymentP>
  );
};
