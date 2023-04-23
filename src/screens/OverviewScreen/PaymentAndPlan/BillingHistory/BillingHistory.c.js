import { useState } from "react";
import { BillingHistoryP } from "./BillingHistory.p";
import { useEffect } from "react";
import { fetchAllPayments } from "../../../../actions/payment.actions";
import { getFromLocalStorage } from "../../../../utils/localStorage.utils";
import { USER_TOKEN_CONSTANT } from "../../../../constants/localstorage.constants";

export const BillingHistoryC = () => {
  // use states
  const [billingHistoryList, setBillingHistoryList] = useState();
  const [loading, setLoading] = useState();
  // use effects
  useEffect(() => {
    setLoading(true);
    const token = getFromLocalStorage(USER_TOKEN_CONSTANT);
    fetchAllPayments({ token })
      .then((response) => {
        console.log(response);
        if (response.length) setBillingHistoryList(response);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  }, []);

  // functions

  return (
    <BillingHistoryP
      billingHistoryList={billingHistoryList}
      loading={loading}
    ></BillingHistoryP>
  );
};
