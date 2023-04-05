export const TotalAmountP = () => {
  return (
    <div className="total__amount__p__div">
      <div className="review__and__pay__title">Review & Pay</div>
      <div className="total__subTotal__div row g-0">
        <div className="total__subTotal__div__left col-lg-4 col-md-4 col-12">
          <div className="total__amount__exact__amount">
            <div className="total__amount__div">Today's Total</div>
            <div className="exact__amount__div">Rs. 10,000</div>
          </div>
          <button className="pay__amount__button">Pay Rs. 10,000</button>
        </div>
        <div className="sub__total__amount__div col-lg-8 col-md-8 col-12">
          <div className="subTotal__list__div">
            <div className="subTotal__individual">
              <div className="subTotal__title">$10/month SAVE $119</div>
              <div className="subTotal__amount">$119.99/year</div>
            </div>
            <div className="subTotal__list__divider"></div>
            <div className="subTotal__list__divider"></div>
            <div className="subTotal__final__div">
              <div className="subTotal__final__text">Total starting Apr 12</div>
              <div className="subTotal__final__amount__div">$119.99 USD</div>
            </div>
          </div>
        </div>
      </div>

      <p className="payment__amount__terms__and__condition__div_1">
        By subscribing, you agree to the Terms of Service, including the
        Cancellation and No Refund Policy. After the end of your 7-day free
        trial, your subscription will renew automatically for the subscription
        fee stated above, and your payment method will be charged in advance.
      </p>
      <p className="payment__amount__terms__and__condition__div_1">
        Your subscription will then renew annually. You may cancel at any time.
        The cancellation goes into effect at the end of the current billing
        cycle. No pro rata refunds will be provided.
      </p>
    </div>
  );
};
