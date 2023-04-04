import { useState } from "react";
import { YourSubscriptionP } from "./YourSubscriptions.p";

export const YourSubscriptionC = () => {

  // use states
  const [showPaymentModal, setShowPaymentModal] = useState();

  // functions
  const handleOnClickPaymentButton = (value) => {
    setShowPaymentModal(value);
    console.log("onclick payment: ", value)
  };
  return (
    <YourSubscriptionP
      handleOnClickPaymentButton={handleOnClickPaymentButton}
      showPaymentModal={showPaymentModal}
      setShowPaymentModal={setShowPaymentModal}
    ></YourSubscriptionP>
  );
};
