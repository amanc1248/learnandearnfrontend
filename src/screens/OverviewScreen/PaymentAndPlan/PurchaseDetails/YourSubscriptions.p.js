import { PaymentComponentC } from "../../../../components/payment/PaymentComponent.c";

export const YourSubscriptionP = ({
  showPaymentModal,
  handleOnClickPaymentButton,
  setShowPaymentModal,
}) => {
  return (
    <div className="yourSubscriptionP__div">
      <div className="your__subscription__list">Your Subscription list</div>
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
  );
};
