import { useState } from "react";
import { SingleSubscriptionP } from "./SingleSubscription.p";

export const SingleSubscriptionC = ({ subscription }) => {
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);

  const changeShowSubscriptionModal = (value) => {
    setShowSubscriptionModal(value);
  };
  return (
    <SingleSubscriptionP
      subscription={subscription}
      showSubscriptionModal={showSubscriptionModal}
      changeShowSubscriptionModal={changeShowSubscriptionModal}
    ></SingleSubscriptionP>
  );
};
