import { useContext } from "react";
import { BankTransferP } from "./BankTransfer.p";
import { PaymentContext } from "../../PaymentComponent.c";

export const BankTransferC = () => {
  // data
  const banksList = [
    { label: "Sanima Bank", value: "Sanima Bank", id: 1 },
    { label: "Everest Bank", value: "Everest Bank", id: 2 },
    {
      label: "Agriculture Development Bank",
      value: "Agriculture Development Bank",
      id: 3,
    },
    { label: "NIC Asia Bank", value: "NIC Asia Bank", id: 4 },
    { label: "Nabil Bank Ltd", value: "Nabil Bank Ltd", id: 5 },
    { label: "Sunrise Bank", value: "Sunrise Bank", id: 6 },
    { label: "Rastra Banijya Bank", value: "Rastra Banijya Bank", id: 7 },
    { label: "Global IME Bank", value: "Global IME Bank", id: 8 },
    { label: "Himalayan Bank", value: "Himalayan Bank", id: 9 },
    { label: "Kumari Bank", value: "Kumari Bank", id: 10 },
    { label: "Laxmi Sunrise Bank", value: "Laxmi Sunrise Bank", id: 11 },
    { label: "Prabhu Bank", value: "Prabhu Bank", id: 12 },
    { label: "Siddharth Bank", value: "Siddharth Bank", id: 13 },
  ];

  // use context
  const paymentContextData = useContext(PaymentContext);
  const {
    bankName,
    setBankName,
    fullNameOnBankAccount,
    setFullNameOnBankAccount,
    paymentImageOfBankAccount,
    setPaymentImagOfBankAccount,
    billingAddressBankTransfer,
    setBillingAddressBankTransfer,
    paymentDateBankTransfer,
    setPaymentDateBankTransfer,
  } = paymentContextData;

  // functions
  const handleOnChangePaymentImage = (value) => {
    setPaymentImagOfBankAccount(value);
  };
  
  const handleOnRemoveImage = ()=>{
    setPaymentImagOfBankAccount("")
  }
  return (
    <BankTransferP
      handleOnChangePaymentImage={handleOnChangePaymentImage}
      banksList={banksList}
      fullNameOnBankAccount={fullNameOnBankAccount}
      setFullNameOnBankAccount={setFullNameOnBankAccount}
      bankName={bankName}
      setBankName={setBankName}
      billingAddressBankTransfer={billingAddressBankTransfer}
      setBillingAddressBankTransfer={setBillingAddressBankTransfer}
      paymentImageOfBankAccount={paymentImageOfBankAccount}
      paymentDateBankTransfer={paymentDateBankTransfer}
      setPaymentDateBankTransfer={setPaymentDateBankTransfer}
      handleOnRemoveImage={handleOnRemoveImage}
    ></BankTransferP>
  );
};
