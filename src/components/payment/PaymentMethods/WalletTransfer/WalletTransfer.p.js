import "../../../../styles/component/paymentComponent.css";
export const WalletTransferP = ({
  walletTypes,
  paymentImage,
  walletName,
  setWalletName,
  fullNameOnWallet,
  setFullNameOnWallet,
  billingAddressWalletTransfer,
  setBillingAddressWalletTransfer,
  paymentDateWalletTransfer,
  setPaymentDateWalletTransfer,
  handleOnChangePaymentImage,
}) => {
  return (
    <div className="wallet__transfer__p__div">
      <div className="payment__input__div">
        <label htmlFor="wallet" className="payment__input__div__label">
          Select Wallet *
        </label>
        <select
          name="selectWallet"
          id="wallet"
          className="select__wallet"
          required
          value={walletName}
          onChange={(e) => {
            setWalletName(e.target.value);
          }}
        >
          {walletTypes.map((wT) => {
            return (
              <option key={wT.id} value={wT.value}>
                {wT.label}
              </option>
            );
          })}
        </select>
      </div>

      <div className="firstName__lastName__div">
        {/* Name on wallet */}
        <div className="payment__input__div">
          <label htmlFor="nameOnWallet" className="payment__input__div__label">
            Full Name on Wallet*
          </label>
          <br />
          <input
            type="text"
            id="nameOnWallet"
            className="payment__input"
            required
            value={fullNameOnWallet}
            onChange={(e) => {
              setFullNameOnWallet(e.target.value);
            }}
          />
        </div>

        <div className="payment__input__div">
          <label htmlFor="Payment Date" className="payment__input__div__label">
            Payment Date *
          </label>
          <br />
          <input
            type="date"
            id="Payment Date"
            className="payment__input"
            required
            value={paymentDateWalletTransfer}
            onChange={(e) => {
              setPaymentDateWalletTransfer(e.target.value);
            }}
          />
        </div>
      </div>

      {/* payment image */}
      <div className="payment__input__div">
        <label htmlFor="paymentImage" className="payment__input__div__label">
          Payment Image (Upload screenshot of the transaction or photo of
          payment voucher)*
        </label>
        <br />
        <input
          type="file"
          id="paymentImage"
          required
          onChange={(e) => {
            handleOnChangePaymentImage(e.target.files[0]);
          }}
        />
      </div>

      {/* billing address */}
      <div className="payment__input__div">
        <label htmlFor="billingAddress" className="payment__input__div__label">
          Billing Address *
        </label>
        <br />
        <input
          type="text"
          id="billingAddress"
          className="payment__input"
          required
          value={billingAddressWalletTransfer}
          onChange={(e) => {
            setBillingAddressWalletTransfer(e.target.value);
          }}
        />
      </div>
    </div>
  );
};
