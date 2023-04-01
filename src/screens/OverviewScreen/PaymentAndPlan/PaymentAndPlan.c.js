import { useState } from "react";
import { PaymentAndPlanP } from "./PaymentAndPlan.p";

export const PaymentAndPlanC = () => {
  // data
  const tabsList = [
    { name: "Purchase Details", id: 0 },
    { name: "Billing History", id: 1 },
  ];

  // use states
  const [activeTab, setActiveTab] = useState(0);

  // functions
  const handleChangeTab = (value) => {
    setActiveTab(value);
  };
  return (
    <PaymentAndPlanP
      tabsList={tabsList}
      handleChangeTab={handleChangeTab}
      activeTab={activeTab}
    ></PaymentAndPlanP>
  );
};
