import { useEffect, useState } from "react";
import { UserModalP } from "./UserModal.p";
import { userFullDetails } from "../../../actions/admin.actions";
import { getFromLocalStorage } from "../../../utils/localStorage.utils";
import { ADMIN_TOKEN_CONSTANT } from "../../../constants/localstorage.constants";

export const UserModalC = ({ user, showModal, changeShowModal }) => {
  // use states
  const [userDetails, setUserDetails] = useState();
  const [loading, setLoading] = useState(false);

  // use effects
  useEffect(() => {
    const adminToken = getFromLocalStorage(ADMIN_TOKEN_CONSTANT);
    const { _id, email } = user;
    setLoading(true);
    userFullDetails({ adminToken, _id, email })
      .then((response) => {
        setUserDetails(response);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);


  return (
    <UserModalP
      showModal={showModal}
      loading={loading}
      changeShowModal={changeShowModal}
      userDetails={userDetails}
    ></UserModalP>
  );
};
