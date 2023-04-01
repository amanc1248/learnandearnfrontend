import { useState } from "react";
import { BillingHistoryP } from "./BillingHistory.p";
import { useEffect } from "react";

export const BillingHistoryC = () => {
  // data
  const billingHistoryData = [
    {
      date: "2020-9-23",
      item: "Pro-12 months",
      status: "Paid",
      total: "5000",
      id: 0,
    },
    {
      date: "2020-9-23",
      item: "Pro-12 months",
      status: "Paid",
      total: "5000",
      id: 1,
    },
    {
      date: "2020-9-23",
      item: "Pro-12 months",
      status: "Paid",
      total: "5000",
      id: 2,
    },
    {
      date: "2020-9-23",
      item: "Pro-12 months",
      status: "Paid",
      total: "5000",
      id: 3,
    },
    {
      date: "2020-9-23",
      item: "Pro-12 months",
      status: "Paid",
      total: "5000",
      id: 4,
    },
    {
      date: "2020-9-23",
      item: "Pro-12 months",
      status: "Paid",
      total: "5000",
      id: 5,
    },
    {
      date: "2020-9-23",
      item: "Pro-12 months",
      status: "Paid",
      total: "5000",
      id: 6,
    },
    {
      date: "2020-9-23",
      item: "Pro-12 months",
      status: "Paid",
      total: "5000",
      id: 7,
    },
  ];
  // use states
  const [billingHistoryList, setBillingHistoryList] = useState();

  // use effects
  useEffect(() => {
    setBillingHistoryList(billingHistoryData);
  }, []);

  // functions

  return (
    <BillingHistoryP billingHistoryList={billingHistoryList}></BillingHistoryP>
  );
};
