import { createContext, useEffect, useState } from "react";
import { PaymentDetailsP } from "./PaymentDetails.p";
import { fetchUserPaymentInReviewStatus } from "../../../../actions/payment.actions";
import { getFromLocalStorage } from "../../../../utils/localStorage.utils";
import { USER_TOKEN_CONSTANT } from "../../../../constants/localstorage.constants";

export const PaymentDetailsContext = createContext();
export const PaymentDetailsC = () => {
  const [showPaymentModal, setShowPaymentModal] = useState();
  const [inReviewPayment, setInReviewPayment] = useState();
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);

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
  }, [refresh]);

  // functions
  const handleOnClickPaymentButton = (value) => {
    setShowPaymentModal(value);
  };

  const handleOnRefresh = (value) => {
    setRefresh(value);
  };
  // context
  const paymentDetailsContextData = { handleOnRefresh };
  return (
    <PaymentDetailsContext.Provider value={paymentDetailsContextData}>
      <PaymentDetailsP
        handleOnClickPaymentButton={handleOnClickPaymentButton}
        showPaymentModal={showPaymentModal}
        setShowPaymentModal={setShowPaymentModal}
        inReviewPayment={inReviewPayment}
        loading={loading}
        paymentDetailsContextData={paymentDetailsContextData}
        PaymentDetailsContext={PaymentDetailsContext}
      ></PaymentDetailsP>
    </PaymentDetailsContext.Provider>
  );
};
