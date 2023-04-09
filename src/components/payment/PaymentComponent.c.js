import { createContext, useState } from "react";
import {
  faRoadBarrier,
  faChartLine,
  faFlask,
  faCertificate,
} from "@fortawesome/free-solid-svg-icons";
import { PaymentComponentP } from "./PaymentComponent.p";

export const PaymentContext = createContext();
export const PaymentComponentC = ({ showComponent, setShowComponent }) => {
  // data
  const stepsGuidesList = [
    {
      icon: faRoadBarrier,
      title: "Step-by-step guidance",
      description:
        "Career Paths and Skill Paths tell you what to learn and in what order.",
    },
    {
      icon: faChartLine,
      title: "Better knowledge retention",
      description:
        "Practice packs and quizzes help you remember what you’ve learned.",
    },
    {
      icon: faFlask,
      title: "Real-world experience",
      description:
        "Projects let you try on your own and learn from your mistakes.",
    },
    {
      icon: faCertificate,
      title: "Tangible proof of progress",
      description:
        "Get a certificate of completion for every course you finish.",
    },
  ];
  const paymentMethods = [
    { id: "bankTransfer", value: "bankTransfer", label: "Bank Transfer" },
    { id: "walletTransfer", value: "walletTransfer", label: "Wallet Transfer" },
  ];
  const paymentPlans = [
    {
      id: "yearlyPlan",
      label: "Pro Plan, Rs. 10,000 per year",
      value: "Yearly Plan",
      amount: 10000,
    },
    {
      id: "sixMonthPlan",
      label: "Pro Plan, Rs. 5,000, six Months",
      value: "Six Month Plan",
      amount: 5000,
    },
  ];

  // use states
  const [showPaymentModal, setShowPaymentModal] = useState(showComponent);
  const [paymentType, setPaymentType] = useState("bankTransfer");

  // bank transfer states
  const [bankName, setBankName] = useState("");
  const [bankAccountNumber, setBankAccountNumber] = useState("");
  const [fullNameOnBankAccount, setFullNameOnBankAccount] = useState("");
  const [paymentImageOfBankAccount, setPaymentImagOfBankAccount] = useState("");
  const [billingAddressBankTransfer, setBillingAddressBankTransfer] =
    useState("");
  const [paymentDateBankTransfer, setPaymentDateBankTransfer] = useState("");

  // wallet transfer states
  const [walletName, setWalletName] = useState("");
  const [fullNameOnWallet, setFullNameOnWallet] = useState("");
  const [paymentImageOfWalletTransfer, setPaymentImageOfWalletTransfer] =
    useState("");
  const [billingAddressWalletTransfer, setBillingAddressWalletTransfer] =
    useState("");
  const [paymentDateWalletTransfer, setPaymentDateWalletTransfer] = useState("");

  // functions
  const handleChangeShowPaymentModal = (value) => {
    setShowPaymentModal(value);
  };

  const handleOnBackClick = () => {
    setShowComponent(false);
  };

  const handleOnChangePaymentType = (value) => {
    setPaymentType(value);
  };

  // use context
  const paymentContextData = {
    paymentType,
    bankName,
    setBankName,
    bankAccountNumber,
    setBankAccountNumber,
    fullNameOnBankAccount,
    setFullNameOnBankAccount,
    paymentImageOfBankAccount,
    setPaymentImagOfBankAccount,
    billingAddressBankTransfer,
    setBillingAddressBankTransfer,
    walletName,
    setWalletName,
    fullNameOnWallet,
    setFullNameOnWallet,
    paymentImageOfWalletTransfer,
    setPaymentImageOfWalletTransfer,
    billingAddressWalletTransfer,
    setBillingAddressWalletTransfer,
    paymentDateBankTransfer,
    setPaymentDateBankTransfer,
    paymentDateWalletTransfer,
    setPaymentDateWalletTransfer,
  };
  return (
    <PaymentContext.Provider value={paymentContextData}>
      <PaymentComponentP
        showPaymentModal={showPaymentModal}
        handleChangeShowPaymentModal={handleChangeShowPaymentModal}
        handleOnBackClick={handleOnBackClick}
        stepsGuidesList={stepsGuidesList}
        handleOnChangePaymentType={handleOnChangePaymentType}
        paymentType={paymentType}
        paymentMethods={paymentMethods}
        paymentPlans={paymentPlans}
      ></PaymentComponentP>
    </PaymentContext.Provider>
  );
};
