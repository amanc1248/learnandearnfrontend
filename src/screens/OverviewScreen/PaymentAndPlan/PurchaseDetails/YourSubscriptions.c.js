import { useState } from "react";
import { YourSubscriptionP } from "./YourSubscriptions.p";
import { useEffect } from "react";
import { getAllActiveSubscriptionsOfUser } from "../../../../actions/susbscription.action";
import { getFromLocalStorage } from "../../../../utils/localStorage.utils";
import { USER_TOKEN_CONSTANT } from "../../../../constants/localstorage.constants";

export const YourSubscriptionC = () => {
  // use states
  const [subscription, setSubscription] = useState();
  const [loading, setLoading] = useState(null);

  // use effects
  useEffect(()=>{
    setLoading(true);
    const userToken  = getFromLocalStorage(USER_TOKEN_CONSTANT);
    getAllActiveSubscriptionsOfUser({token:userToken}).then((response)=>{
      setSubscription(response)
      setLoading(false)
    }).catch((e)=>{
      console.log(e)
      setLoading(false)
    })
  },[])


  return (
    <YourSubscriptionP
      subscription={subscription}
      loading={loading}
    ></YourSubscriptionP>
  );
};
