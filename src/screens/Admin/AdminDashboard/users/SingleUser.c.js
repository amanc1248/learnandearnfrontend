import { useState } from "react";
import { SingleUserP } from "./SingleUser.p";

export const SingleUserC = ({ user }) => {
  // use states
  const [showUserDetails, setShowUserDetails] = useState(false);

  // functions
  const changeShowUserDetails = (value) => {
    setShowUserDetails(value);
  };
  return (
    <SingleUserP
      user={user}
      showUserDetails={showUserDetails}
      changeShowUserDetails={changeShowUserDetails}
    ></SingleUserP>
  );
};
