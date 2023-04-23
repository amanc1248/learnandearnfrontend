export const createPaymentObject = ({ paymentType, paymentDetails }) => {
  const {
    bankName,
    bankAccountNumber,
    fullNameOnBankAccount,
    paymentImage,
    billingAddressBankTransfer,
    walletName,
    fullNameOnWallet,
    billingAddressWalletTransfer,
    paymentDateBankTransfer,
    paymentDateWalletTransfer,
    proPaymentPlan,
    userToken,
  } = paymentDetails;

  // new payment object
  const formData = new FormData();
  formData.append('item',proPaymentPlan.id);
  formData.append('amount',proPaymentPlan.amount);
  formData.append('method',paymentType);
  formData.append('additionalInformation',"additionalInformation");
  formData.append('token',userToken);
  formData.append('paymentImage',paymentImage);
  
  if (paymentType === "bankTransfer") {
    formData.append("fullName", fullNameOnBankAccount);
    formData.append("billingAddress", billingAddressBankTransfer);
    formData.append("bankName", bankName);
    formData.append("bankAccountNumber", bankAccountNumber);
    formData.append("paymentDate", paymentDateBankTransfer);
    return formData;
  }

  if (paymentType === "walletTransfer") {
    formData.append("fullName" , fullNameOnWallet);
    formData.append("billingAddress" , billingAddressWalletTransfer);
    formData.append("walletName" , walletName);
    formData.append("paymentDate" , paymentDateWalletTransfer);
    return formData;
  }
};
