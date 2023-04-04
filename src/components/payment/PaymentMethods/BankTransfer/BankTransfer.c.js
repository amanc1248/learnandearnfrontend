import { useState } from "react";
import { BankTransferP } from "./BankTransfer.p";

export const BankTransferC = () => {
  // use states
  const [paymentImage, setPaymentImage] = useState({name:"",file:""});

  // functions
  const handleOnChangePaymentImage = (value) => {
    setPaymentImage(value);
  };
  return (
    <BankTransferP
      handleOnChangePaymentImage={handleOnChangePaymentImage}
      paymentImage={paymentImage}
    ></BankTransferP>
  );
};
