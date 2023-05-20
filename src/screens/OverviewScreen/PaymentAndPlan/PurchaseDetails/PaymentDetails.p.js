import { ButtonLoaderC } from "../../../../components/loader/buttonLoader/ButtonLoader.c";
import { PaymentComponentC } from "../../../../components/payment/PaymentComponent.c";

export const PaymentDetailsP = ({
  showPaymentModal,
  setShowPaymentModal,
  handleOnClickPaymentButton,
  loading,
  paymentStatus,
}) => {
  // console.log(user)
  return (
    <>
      {loading && <ButtonLoaderC></ButtonLoaderC>}
      {loading === false && !paymentStatus?.show && (
        <div>
          <div>
            {paymentStatus?.paymentStatusInformation}
          </div>
        </div>
      )}
      {loading === false && paymentStatus?.show && (
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
