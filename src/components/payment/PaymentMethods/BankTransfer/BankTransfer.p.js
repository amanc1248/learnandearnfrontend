export const BankTransferP = ({handleOnChangePaymentImage, paymentImage}) => {
  return (
    <div className="bank__transfer__p__div">
      <form action="">
        <div className="payment__input__div">
          <label htmlFor="bank" className="payment__input__div__label">
            Select Bank *
          </label>
          <select name="selectBank" id="bank" className="select__bank" required>
            <option value="Sanima Bank">Sanima Bank</option>
            <option value="Sanima Bank">Sanima Bank</option>
            <option value="Sanima Bank">Sanima Bank</option>
            <option value="Sanima Bank">Sanima Bank</option>
            <option value="Sanima Bank">Sanima Bank</option>
            <option value="Sanima Bank">Sanima Bank</option>
          </select>
        </div>
        <div className="payment__input__div">
          <label htmlFor="accountNumber" className="payment__input__div__label">
            Account Number *
          </label>
          <br />
          <input
            type="number"
            id="accountNumber"
            className="payment__input"
            required
          />
        </div>
        <div className="firstName__lastName__div">
          <div className="payment__input__div">
            <label htmlFor="firstName" className="payment__input__div__label">
              First Name *
            </label>
            <br />
            <input
              type="text"
              id="firstName"
              className="payment__input"
              required
            />
          </div>

          <div className="payment__input__div">
            <label htmlFor="lastName" className="payment__input__div__label">
              Last Name *
            </label>
            <br />
            <input
              type="text"
              id="lastName"
              className="payment__input"
              required
            />
          </div>
        </div>
        <div className="payment__input__div">
          <label htmlFor="paymentImage" className="payment__input__div__label">Payment Image (Upload screenshot of the transaction or photo of payment voucher)*</label>
          <label htmlFor="paymentImage" className="payment__input__div__label__image custom__file__upload">
            {paymentImage.name ? paymentImage.name : "No Image Selected"}
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
            />
          </div>
      </form>
    </div>
  );
};
