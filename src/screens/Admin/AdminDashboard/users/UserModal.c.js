import { useEffect, useState } from "react";
import { UserModalP } from "./UserModal.p";
import { userFullDetails } from "../../../../actions/admin.actions";
import { getFromLocalStorage } from "../../../../utils/localStorage.utils";
import { ADMIN_TOKEN_CONSTANT } from "../../../../constants/localstorage.constants";

export const UserModalC = ({ user, showModal, changeShowModal }) => {
  console.log("the user...", user)
  // data
  const paymentListx = [
    {
      paymentId: "kl",
      amount: 78909,
      date: "2021-23-69",
      item: "Yearly plan",
      method: "Bank Transfer",
      fullName: "Aman Chaudhary",
      paymentImage: "",
      billingAddress: "Duhabi-09",
      paid: false,
      transactionId: "678",
      reviewStatus: "inReview",
      paymentDate: "2020-2-2",
      additionalInformation: "This is additional information",
    },
  ];
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
        console.log("the pseaksdfkasfd;",response);
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
      changeShowModal={changeShowModal}
      userDetails={userDetails}
    ></UserModalP>
  );
};
