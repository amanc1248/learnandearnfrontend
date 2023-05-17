export const BankTransferP = ({
  handleOnChangePaymentImage,
  paymentImageOfBankAccount,
  banksList,
  fullNameOnBankAccount,
  setFullNameOnBankAccount,
  bankName,
  setBankName,
  billingAddressBankTransfer,
  setBillingAddressBankTransfer,
  paymentDateBankTransfer,
  setPaymentDateBankTransfer,
  handleOnRemoveImage,
}) => {
  return (
    <div className="bank__transfer__p__div">
        <div className="payment__input__div">
          <label htmlFor="bank" className="payment__input__div__label">
            Select Bank *
          </label>
          <select
            name="selectBank"
            id="bank"
            className="select__bank"
            value={bankName}
            required
            onChange={(e) => {
              setBankName(e.target.value);
            }}
          >
            {banksList.map((bank) => {
              return (
                <option key={bank.id} value={bank.value}>
                  {bank.label}
                </option>
              );
            })}
          </select>
        </div>
        <div className="firstName__lastName__div">
          <div className="payment__input__div">
            <label htmlFor="Full Name" className="payment__input__div__label">
              Full Name *
            </label>
            <br />
            <input
              type="text"
              id="Full Name"
              className="payment__input"
              required
              value={fullNameOnBankAccount}
              onChange={(e) => {
                setFullNameOnBankAccount(e.target.value);
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
              value={paymentDateBankTransfer}
              onChange={(e) => {
                setPaymentDateBankTransfer(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="payment__input__div">
          <label htmlFor="paymentImage" className="payment__input__div__label">
            Payment Image (Upload screenshot of the transaction or photo of
            payment voucher)*
          </label>
          <br />
          {!paymentImageOfBankAccount &&<input
            type="file"
            id="paymentImage"
            required
            onChange={(e) => {
              handleOnChangePaymentImage(e.target.files[0])
            }}
          />}
          {paymentImageOfBankAccount && <div className="payment__image__remove__image__div">
          <input type="text" className="payment__input__image__name" disabled value={paymentImageOfBankAccount.name} />
          <button className="remove__image__button" style={{color:"red", fontWeight:"600"}} onClick={handleOnRemoveImage}>Remove</button>
          </div>}

        </div>
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
            value={billingAddressBankTransfer}
            onChange={(e) => {
              setBillingAddressBankTransfer(e.target.value);
            }}
          />
        </div>
    </div>
  );
};
