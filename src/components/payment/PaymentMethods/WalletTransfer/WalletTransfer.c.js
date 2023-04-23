import { useContext } from "react";
import { PaymentContext } from "../../PaymentComponent.c";
import { WalletTransferP } from "./WalletTransfer.p";

export const WalletTransferC = () => {
  // data
  const walletTypes = [
    { label: "E-sewa", value: "E-sewa", id: 1 },
    { label: "IME Pay", value: "IME Pay", id: 2 },
    { label: "Khalti", value: "Khalti", id: 3 },
    { label: "FonePay", value: "FonePay", id: 4 },
  ];


  // use context
  const paymentContextData = useContext(PaymentContext);
  const {
    walletName,
    setWalletName,
    fullNameOnWallet,
    setFullNameOnWallet,
    paymentImageOfWalletTransfer,
    setPaymentImageOfWalletTransfer,
    billingAddressWalletTransfer,
    setBillingAddressWalletTransfer,
    paymentDateWalletTransfer,
    setPaymentDateWalletTransfer,
  } = paymentContextData;

    // functions
    const handleOnChangePaymentImage = (value) => {
      setPaymentImageOfWalletTransfer(value);
    };
  
  return (
    <WalletTransferP
      walletName={walletName}
      setWalletName={setWalletName}
      fullNameOnWallet={fullNameOnWallet}
      setFullNameOnWallet={setFullNameOnWallet}
      paymentImageOfWalletTransfer={paymentImageOfWalletTransfer}
      setPaymentImageOfWalletTransfer={setPaymentImageOfWalletTransfer}
      billingAddressWalletTransfer={billingAddressWalletTransfer}
      setBillingAddressWalletTransfer={setBillingAddressWalletTransfer}
      walletTypes={walletTypes}
      paymentDateWalletTransfer={paymentDateWalletTransfer}
      setPaymentDateWalletTransfer={setPaymentDateWalletTransfer}
      handleOnChangePaymentImage={handleOnChangePaymentImage}
    ></WalletTransferP>
  );
};
