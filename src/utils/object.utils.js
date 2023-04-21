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
  let paymentObject = {};
  paymentObject.item = proPaymentPlan.id;
  paymentObject.amount = proPaymentPlan.amount;
  paymentObject.method = paymentType;
  paymentObject.additionalInformation = "additionalInformation";
  paymentObject.token = userToken;
  paymentObject.paymentImage = paymentImage;
  
  if (paymentType === "bankTransfer") {
    paymentObject.fullName = fullNameOnBankAccount;
    paymentObject.billingAddress = billingAddressBankTransfer;
    paymentObject.bankName = bankName;
    paymentObject.bankAccountNumber = bankAccountNumber;
    paymentObject.paymentDate = paymentDateBankTransfer;
    return paymentObject;
  }

  if (paymentType === "walletTransfer") {
    paymentObject.fullName = fullNameOnWallet;
    paymentObject.billingAddress = billingAddressWalletTransfer;
    paymentObject.walletName = walletName;
    paymentObject.paymentDate = paymentDateWalletTransfer;
    return paymentObject;
  }
};
