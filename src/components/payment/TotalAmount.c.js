import { useContext } from "react";
import { PaymentContext } from "./PaymentComponent.c";
import { TotalAmountP } from "./TotalAmount.p";
import { getFromLocalStorage } from "../../utils/localStorage.utils";
import { USER_TOKEN_CONSTANT } from "../../constants/localstorage.constants";
import { createPaymentObject } from "../../utils/object.utils";

export const TotalAmountC = () => {
  // use context
  const paymentContextData = useContext(PaymentContext);
  const {
    paymentType,
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
    paymentAmount,
    proPaymentPlan,
  } = paymentContextData;

  //  functions
  const handleOnClickPayButton = () => {
    const userToken = getFromLocalStorage(USER_TOKEN_CONSTANT);
    if (!userToken) {
      console.log("No user token");
      return;
    }
    const paymentDetails = {
      paymentType,
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
      paymentAmount,
      proPaymentPlan,
      userToken,
    };
    const paymentObject = createPaymentObject({ paymentType, paymentDetails });
    console.log(paymentObject);
  };
  return (
    <TotalAmountP
      proPaymentPlan={proPaymentPlan}
      handleOnClickPayButton={handleOnClickPayButton}
    ></TotalAmountP>
  );
};
