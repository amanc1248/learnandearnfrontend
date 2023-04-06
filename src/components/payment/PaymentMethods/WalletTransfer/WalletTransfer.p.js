import "../../../../styles/component/paymentComponent.css"
export const WalletTransferP = ({paymentImage}) => {
  return (
    <div className="wallet__transfer__p__div">
      <form action="">
      <div className="payment__input__div">
          <label htmlFor="wallet" className="payment__input__div__label">
            Select Wallet *
          </label>
          <select name="selectWallet" id="wallet" className="select__wallet" required>
            <option value="E-sewa">E-sewa</option>
            <option value="IMEPay">IME Pay</option>
            <option value="Khalti">Khalti</option>
          </select>
        </div>

        {/* Name on wallet */}
        <div className="payment__input__div">
          <label htmlFor="nameOnWallet" className="payment__input__div__label">
            Name on Wallet*
          </label>
          <br />
          <input
            type="text"
            id="nameOnWallet"
            className="payment__input"
            required
          />
        </div>

        {/* payment image */}
        <div className="payment__input__div">
          <label htmlFor="paymentImage" className="payment__input__div__label">Payment Image (Upload screenshot of the transaction or photo of payment voucher)*</label>
          <label htmlFor="paymentImage" className="payment__input__div__label__image custom__file__upload">
            {paymentImage?.name ? paymentImage?.name : "No Image Selected"}
          </label>
          <br />
          <input
            type="file"
            id="paymentImage"
            className="payment__input__image"
            required
            onChange={(e)=>{console.log(e)}}
          />
        </div>
      </form>
    </div>
  );
};
