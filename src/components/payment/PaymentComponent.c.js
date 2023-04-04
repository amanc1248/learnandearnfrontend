import { useState } from "react";
import {
  faRoadBarrier,
  faChartLine,
  faFlask,
  faCertificate,
} from "@fortawesome/free-solid-svg-icons";
import { PaymentComponentP } from "./PaymentComponent.p";

export const PaymentComponentC = ({ showComponent, setShowComponent }) => {

  // datas
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
    {id:"bankTransfer", value: "bankTransfer", label:"Bank Transfer"},
    {id:"walletTransfer", value: "walletTransfer", label:"Wallet Transfer"},
  ]

  // use states
  const [showPaymentModal, setShowPaymentModal] = useState(showComponent);
  const [paymentType, setPaymentType] = useState("bankTransfer");

  // functions
  const handleChangeShowPaymentModal = (value) => {
    setShowPaymentModal(value);
  };

  const handleOnBackClick = () => {
    setShowComponent(false);
  };

  const handleOnChangePaymentType = (value)=>{
    setPaymentType(value)
  }
  return (
    <PaymentComponentP
      showPaymentModal={showPaymentModal}
      handleChangeShowPaymentModal={handleChangeShowPaymentModal}
      handleOnBackClick={handleOnBackClick}
      stepsGuidesList={stepsGuidesList}
      handleOnChangePaymentType={handleOnChangePaymentType}
      paymentType={paymentType}
      paymentMethods={paymentMethods}
    ></PaymentComponentP>
  );
};
