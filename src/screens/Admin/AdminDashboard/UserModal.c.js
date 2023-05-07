import { useEffect, useState } from "react";
import { UserModalP } from "./UserModal.p";
import { userFullDetails } from "../../../actions/admin.actions";
import { getFromLocalStorage } from "../../../utils/localStorage.utils";
import { ADMIN_TOKEN_CONSTANT } from "../../../constants/localstorage.constants";

export const UserModalC = ({ user, showModal, changeShowModal }) => {
  console.log("the user...", user);
  // data
  const paymentList = [
    {
      _id: "644d1090f45e4a4d8aa85f36",
      paymentId: "paymentId",
      userId: "644d09aaeb47c0af1547d6dd",
      amount: 10000,
      date: "2023-04-29T12:41:52.369Z",
      item: "yearlyPlan",
      method: "bankTransfer",
      fullName: "Aman Chaudhayr",
      paymentImage:
        "http://res.cloudinary.com/proudposhak-com/image/upload/v1682772112/yzdq8brcpgxhaxamkiix.png",
      billingAddress: "Kathmandu",
      bankName: "Sanima Bank",
      bankAccountNumber: "Account Number",
      paid: false,
      transactionId: "transactionId",
      reviewStatus: "inReview",
      paymentDate: "2023-04-13T00:00:00.000Z",
      additionalInformation: "additionalInformation",
      createdAt: "2023-04-29T12:41:52.394Z",
      updatedAt: "2023-04-29T12:41:52.394Z",
      __v: 0,
    },
    {
      _id: "644d1090f45e4a4d8aa85f36",
      paymentId: "paymentId",
      userId: "644d09aaeb47c0af1547d6dd",
      amount: 10000,
      date: "2023-04-29T12:41:52.369Z",
      item: "yearlyPlan",
      method: "bankTransfer",
      fullName: "Aman Chaudhayr",
      paymentImage:
        "http://res.cloudinary.com/proudposhak-com/image/upload/v1682772112/yzdq8brcpgxhaxamkiix.png",
      billingAddress: "Kathmandu",
      bankName: "Sanima Bank",
      bankAccountNumber: "Account Number",
      paid: false,
      transactionId: "transactionId",
      reviewStatus: "inReview",
      paymentDate: "2023-04-13T00:00:00.000Z",
      additionalInformation: "additionalInformation",
      createdAt: "2023-04-29T12:41:52.394Z",
      updatedAt: "2023-04-29T12:41:52.394Z",
      __v: 0,
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
        response.payments = paymentList;
        setUserDetails(response);
        console.log("the pseaksdfkasfd;", response);
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
