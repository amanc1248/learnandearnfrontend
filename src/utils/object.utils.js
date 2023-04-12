export const createPaymentObject = ({ paymentType, paymentDetails }) => {
  const {
    bankName,
    bankAccountNumber,
    fullNameOnBankAccount,
    paymentImageOfBankAccount,
    billingAddressBankTransfer,
    walletName,
    fullNameOnWallet,
    paymentImageOfWalletTransfer,
    billingAddressWalletTransfer,
    paymentDateBankTransfer,
    paymentDateWalletTransfer,
    proPaymentPlan,
    userToken,
  } = paymentDetails;

// new payment object
  let paymentObject = {};
  if (paymentType === "bankTransfer") {
    paymentObject.item = proPaymentPlan.id;
    paymentObject.amount = proPaymentPlan.amount;
    paymentObject.method = paymentType;
    paymentObject.fullName = fullNameOnBankAccount;
    paymentObject.billingAddress = billingAddressBankTransfer;
    paymentObject.bankName = bankName;
    paymentObject.bankAccountNumber = bankAccountNumber;
    paymentObject.paymentImage = paymentImageOfBankAccount;
    paymentObject.additionalInformation = "additionalInformation";
    paymentObject.paymentDate = paymentDateBankTransfer;
    paymentObject.token = userToken;

    return paymentObject;
  }
  if(paymentType==="walletTransfer"){
    paymentObject.item = proPaymentPlan.id;
    paymentObject.amount = proPaymentPlan.amount;
    paymentObject.method = paymentType;
    paymentObject.fullName = fullNameOnWallet;
    paymentObject.billingAddress = billingAddressWalletTransfer;
    paymentObject.walletName = walletName;
    paymentObject.paymentImage = paymentImageOfWalletTransfer;
    paymentObject.additionalInformation = "additionalInformation";
    paymentObject.paymentDate = paymentDateWalletTransfer;
    paymentObject.token = userToken;
    return paymentObject;
  }
};
