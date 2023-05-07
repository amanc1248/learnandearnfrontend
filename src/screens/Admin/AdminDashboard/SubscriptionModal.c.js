import { useEffect, useState } from "react";
import { SubscriptionModalP } from "./SubscriptionModal.p";
import { subscriptionByIdAdmin } from "../../../actions/admin.actions";
import { getFromLocalStorage } from "../../../utils/localStorage.utils";
import { ADMIN_TOKEN_CONSTANT } from "../../../constants/localstorage.constants";

export const SubscriptionModalC = ({
  subscriptionId,
  showModal,
  changeShowModal,
}) => {
  // use states
  const [subscription, setSubscription] = useState();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  // use effect
  useEffect(() => {
    setLoading(true);
    const adminToken = getFromLocalStorage(ADMIN_TOKEN_CONSTANT);
    subscriptionByIdAdmin({ adminToken, _id: subscriptionId })
      .then((response) => {
        setSubscription(response);
        setUser(response?.userId);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);
  return (
    <SubscriptionModalP
      loading={loading}
      subscription={subscription}
      user={user}
      subscriptionId={subscriptionId}
      showModal={showModal}
      changeShowModal={changeShowModal}
    ></SubscriptionModalP>
  );
};
