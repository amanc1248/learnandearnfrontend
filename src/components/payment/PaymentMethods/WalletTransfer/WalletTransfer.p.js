import "../../../../styles/component/paymentComponent.css";
export const WalletTransferP = ({
  walletTypes,
  paymentImage,
  walletName,
  setWalletName,
  fullNameOnWallet,
  setFullNameOnWallet,
  paymentImageOfWalletTransfer,
  setPaymentImageOfWalletTransfer,
  billingAddressWalletTransfer,
  setBillingAddressWalletTransfer,
}) => {
  return (
    <div className="wallet__transfer__p__div">
      <form action="">
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

        {/* payment image */}
        <div className="payment__input__div">
          <label htmlFor="paymentImage" className="payment__input__div__label">
            Payment Image (Upload screenshot of the transaction or photo of
            payment voucher)*
          </label>
          <label
            htmlFor="paymentImage"
            className="payment__input__div__label__image custom__file__upload"
          >
            {paymentImage?.name ? paymentImage?.name : "No Image Selected"}
          </label>
          <br />
          <input
            type="file"
            id="paymentImage"
            className="payment__input__image"
            required
            onChange={(e) => {
              console.log(e);
            }}
          />
        </div>

        {/* billing address */}
        <div className="payment__input__div">
          <label
            htmlFor="billingAddress"
            className="payment__input__div__label"
          >
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
      </form>
    </div>
  );
};
