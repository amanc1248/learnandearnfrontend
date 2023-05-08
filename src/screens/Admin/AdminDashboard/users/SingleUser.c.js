import { useState } from "react";
import { SingleUserP } from "./SingleUser.p";

export const SingleUserC = ({ user }) => {
  // use states
  const [showUserDetails, setShowUserDetails] = useState(false);
  const [subscription, setState] = useState(user?.activeSubscriptions[0])
  // functions
  const changeShowUserDetails = (value) => {
    setShowUserDetails(value);
  };
  return (
    <SingleUserP
      user={user}
      subscription={subscription}
      showUserDetails={showUserDetails}
      changeShowUserDetails={changeShowUserDetails}
    ></SingleUserP>
  );
};
