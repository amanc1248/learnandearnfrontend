import { ButtonLoaderC } from "../../../../components/loader/buttonLoader/ButtonLoader.c";
import { PaymentComponentC } from "../../../../components/payment/PaymentComponent.c";

export const PaymentDetailsP = ({
  showPaymentModal,
  setShowPaymentModal,
  handleOnClickPaymentButton,
  loading,
  inReviewPayment
}) => {
  return (
    <>
      {loading && <ButtonLoaderC></ButtonLoaderC>}
      {loading === false && inReviewPayment && (
        <div>
          <div>
            Your payment is in review. You will be notified in your email about
            the status of your payment
          </div>
        </div>
      )}
      {loading === false && !inReviewPayment && (
        <div>
          <button
            className="open__payment__button"
            onClick={() => {
              handleOnClickPaymentButton(true);
            }}
          >
            Upgrade to Pro
          </button>
          {showPaymentModal && (
            <PaymentComponentC
              showComponent={showPaymentModal}
              setShowComponent={setShowPaymentModal}
            ></PaymentComponentC>
          )}
        </div>
      )}
    </>
  );
};
