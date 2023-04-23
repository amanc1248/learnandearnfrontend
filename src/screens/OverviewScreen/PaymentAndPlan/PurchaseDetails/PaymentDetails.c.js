import { useEffect, useState } from "react";
import { PaymentDetailsP } from "./PaymentDetails.p";
import { fetchUserPaymentInReviewStatus } from "../../../../actions/payment.actions";
import { getFromLocalStorage } from "../../../../utils/localStorage.utils";
import { USER_TOKEN_CONSTANT } from "../../../../constants/localstorage.constants";

export const PaymentDetailsC = () => {
  const [showPaymentModal, setShowPaymentModal] = useState();
  const [inReviewPayment, setInReviewPayment] = useState();
  const [loading, setLoading] = useState(true);

  //   use effects
  useEffect(() => {
    setLoading(true);
    const token = getFromLocalStorage(USER_TOKEN_CONSTANT);
    fetchUserPaymentInReviewStatus({ token })
      .then((response) => {
        if (response) {
          setInReviewPayment(response);
        }
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);

  // functions
  const handleOnClickPaymentButton = (value) => {
    setShowPaymentModal(value);
  };
  return (
    <PaymentDetailsP
      handleOnClickPaymentButton={handleOnClickPaymentButton}
      showPaymentModal={showPaymentModal}
      setShowPaymentModal={setShowPaymentModal}
      inReviewPayment={inReviewPayment}
      loading={loading}
    ></PaymentDetailsP>
  );
};
