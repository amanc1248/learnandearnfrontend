import { PaymentComponentC } from "../../../../components/payment/PaymentComponent.c";

export const YourSubscriptionP = ({
  showPaymentModal,
  handleOnClickPaymentButton,
  setShowPaymentModal,
  subscriptions,
}) => {
  return (
    <div className="yourSubscriptionP__div">
      <div className="your__subscription__list">
      Your Subscription Detail
      <table className="billing__history__table">
          <thead>
            <tr>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Subscription Amount</th>
              <th>Subscription Type</th>
              <th>Details</th>
            </tr>
          </thead>
          </table>
        {subscriptions && subscriptions.map((subscription)=>{
          return 
        })}
      </div>
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
