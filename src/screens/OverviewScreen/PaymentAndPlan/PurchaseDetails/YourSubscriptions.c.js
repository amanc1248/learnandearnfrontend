import { useState } from "react";
import { YourSubscriptionP } from "./YourSubscriptions.p";
import { useEffect } from "react";

export const YourSubscriptionC = () => {
  // data
  const exampleList = [
    {
      subscriptionStartDate: "2020-01-07",
      subscriptionEndDate: "2020-09-07",
      subscriptionAmount: 10000,
      subscriptionType: "",
      isSubscriptionActive: true,
      paymentId: "934dhjkcnnbndklde",
      userId: "03kjkdfmnvoke30000839",
    },
    {
      subscriptionStartDate: "2020-01-07",
      subscriptionEndDate: "2020-09-07",
      subscriptionAmount: 10000,
      subscriptionType: "",
      isSubscriptionActive: true,
      paymentId: "934dhjkcnnbndklde",
      userId: "03kjkdfmnvoke30000839",
    },
    {
      subscriptionStartDate: "2020-01-07",
      subscriptionEndDate: "2020-09-07",
      subscriptionAmount: 10000,
      subscriptionType: "",
      isSubscriptionActive: true,
      paymentId: "934dhjkcnnbndklde",
      userId: "03kjkdfmnvoke30000839",
    },
    {
      subscriptionStartDate: "2020-01-07",
      subscriptionEndDate: "2020-09-07",
      subscriptionAmount: 10000,
      subscriptionType: "",
      isSubscriptionActive: true,
      paymentId: "934dhjkcnnbndklde",
      userId: "03kjkdfmnvoke30000839",
    },
    {
      subscriptionStartDate: "2020-01-07",
      subscriptionEndDate: "2020-09-07",
      subscriptionAmount: 10000,
      subscriptionType: "",
      isSubscriptionActive: true,
      paymentId: "934dhjkcnnbndklde",
      userId: "03kjkdfmnvoke30000839",
    },
  ];
  // use states
  const [showPaymentModal, setShowPaymentModal] = useState();
  const [subscriptions, setSubscriptions] = useState();
  // use effects
  useEffect(()=>{
    setSubscriptions(exampleList);
  },[])

  // functions
  const handleOnClickPaymentButton = (value) => {
    setShowPaymentModal(value);
    console.log("onclick payment: ", value);
  };
  return (
    <YourSubscriptionP
      handleOnClickPaymentButton={handleOnClickPaymentButton}
      showPaymentModal={showPaymentModal}
      setShowPaymentModal={setShowPaymentModal}
      subscriptions={subscriptions}
    ></YourSubscriptionP>
  );
};
