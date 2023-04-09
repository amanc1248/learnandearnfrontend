export const BankTransferP = ({
  handleOnChangePaymentImage,
  paymentImageOfBankAccount,
  banksList,
  fullNameOnBankAccount,
  setFullNameOnBankAccount,
  bankName,
  setBankName,
  bankAccountNumber,
  setBankAccountNumber,
  billingAddressBankTransfer,
  setBillingAddressBankTransfer,
  paymentDateBankTransfer,
  setPaymentDateBankTransfer,
}) => {
  return (
    <div className="bank__transfer__p__div">
      <form action="">
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
        <div className="payment__input__div">
          <label htmlFor="accountNumber" className="payment__input__div__label">
            Account Number *
          </label>
          <br />
          <input
            type="text"
            id="accountNumber"
            className="payment__input"
            required
            value={bankAccountNumber}
            onChange={(e) => {
              setBankAccountNumber(e.target.value);
            }}
          />
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
          <label
            htmlFor="paymentImage"
            className="payment__input__div__label__image custom__file__upload"
          >
            {paymentImageOfBankAccount.name
              ? paymentImageOfBankAccount.name
              : "No Image Selected"}
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
      </form>
    </div>
  );
};
