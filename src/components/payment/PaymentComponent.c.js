import { createContext, useContext, useState } from "react";
import {
  faRoadBarrier,
  faChartLine,
  faFlask,
  faCertificate,
} from "@fortawesome/free-solid-svg-icons";
import { PaymentComponentP } from "./PaymentComponent.p";
import { getFromLocalStorage } from "../../utils/localStorage.utils";
import { USER_TOKEN_CONSTANT } from "../../constants/localstorage.constants";
import { createPaymentObject } from "../../utils/object.utils";
import { createPayment } from "../../actions/payment.actions";
import { PaymentDetailsContext } from "../../screens/OverviewScreen/PaymentAndPlan/PurchaseDetails/PaymentDetails.c";

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
    // {
    //   id: "yearlyPlan",
    //   label: "Pro Plan, Rs. 10,000 per year",
    //   value: "Yearly Plan",
    //   amount: 10000,
    // },
    {
      id: "sixMonthPlan",
      label: "Pro Plan, Rs. 10,000, six Months",
      value: "Six Month Plan",
      amount: 10000,
    },
  ];

  // use context
  const paymentDetailsContext = useContext(PaymentDetailsContext);
  const {handleOnRefresh} = paymentDetailsContext;

  // use states
  const [showPaymentModal, setShowPaymentModal] = useState(showComponent);
  const [paymentType, setPaymentType] = useState("bankTransfer");
  const [proPaymentPlan, setProPaymentPlan] = useState(paymentPlans[0]);
  const [paymentAmount, setPaymentAmount] = useState(paymentPlans[0].amount);
  const [paymentProcessing, setPaymentProcessing] = useState(false);

  // bank transfer states
  const [bankName, setBankName] = useState("Sanima Bank");
  const [fullNameOnBankAccount, setFullNameOnBankAccount] = useState("");
  const [paymentImageOfBankAccount, setPaymentImagOfBankAccount] = useState("");
  const [billingAddressBankTransfer, setBillingAddressBankTransfer] =
    useState("");
  const [paymentDateBankTransfer, setPaymentDateBankTransfer] = useState("");

  // wallet transfer states
  const [walletName, setWalletName] = useState("E-sewa");
  const [fullNameOnWallet, setFullNameOnWallet] = useState("");
  const [paymentImageOfWalletTransfer, setPaymentImageOfWalletTransfer] =
    useState("");
  const [billingAddressWalletTransfer, setBillingAddressWalletTransfer] =
    useState("");
  const [paymentDateWalletTransfer, setPaymentDateWalletTransfer] =
    useState("");

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

  const onChangeProPaymentPlan = (value) => {
    const paymentPlan = paymentPlans.filter((plan) => plan.id === value)[0];
    setProPaymentPlan(paymentPlan);
  };

  const handleOnSubmitPayment = (e) => {
    e.preventDefault();
    const userToken = getFromLocalStorage(USER_TOKEN_CONSTANT);
    if (!userToken) {
      console.log("No user token");
      return;
    }
    const paymentDetails = {
      paymentType,
      bankName,
      fullNameOnBankAccount,
      billingAddressBankTransfer,
      walletName,
      fullNameOnWallet,
      paymentImage:paymentType==="bankTransfer"?paymentImageOfBankAccount: paymentImageOfWalletTransfer,
      billingAddressWalletTransfer,
      paymentDateBankTransfer,
      paymentDateWalletTransfer,
      paymentAmount,
      proPaymentPlan,
      userToken,
    };
    setPaymentProcessing(true);
    const paymentObject = createPaymentObject({ paymentType, paymentDetails });
    createPayment({ createPaymentObject: paymentObject, token: userToken })
      .then((response) => {
        console.log(response);
        setPaymentProcessing(false);
        setShowPaymentModal(false);
        handleOnRefresh(true)
      })
      .catch((error) => {
        setPaymentProcessing(false)
        console.error(error);
      });
    console.log(paymentObject);
  };

  // use context
  const paymentContextData = {
    paymentType,
    bankName,
    setBankName,
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
    paymentAmount,
    setPaymentAmount,
    proPaymentPlan,
    setProPaymentPlan,
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
        proPaymentPlan={proPaymentPlan}
        setProPaymentPlan={setProPaymentPlan}
        onChangeProPaymentPlan={onChangeProPaymentPlan}
        handleOnSubmitPayment={handleOnSubmitPayment}
        paymentProcessing={paymentProcessing}
        setPaymentProcessing = {setPaymentProcessing}
      ></PaymentComponentP>
    </PaymentContext.Provider>
  );
};
