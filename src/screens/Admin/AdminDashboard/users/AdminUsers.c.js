import { useEffect, useState } from "react";
import { AdminUsersP } from "./AdminUsers.p";
import { allUsersAdmin } from "../../../../actions/admin.actions";
import { getFromLocalStorage } from "../../../../utils/localStorage.utils";
import { ADMIN_TOKEN_CONSTANT } from "../../../../constants/localstorage.constants";

export const AdminUsersC = () => {
  // data
  const list = [
    {
      name: "Aman Chaudhary",
      email: "amanc1248@gmail.com",
      joinedDate: "2023-25-36",
      userType: "Free",
      subscriptionType: "Free",
      subscriptionStartDate: "2000-3-25",
      subscriptionEndDate: "2020-5-8",
      subscriptionAmount: 500,
      _id: "644e6f0ec5e579004e64ca67",
    },
    {
      name: "Aman Chaudhary",
      email: "amanc1248@gmail.com",
      joinedDate: "2023-25-36",
      userType: "Free",
      subscriptionType: "Free",
      subscriptionStartDate: "2000-3-25",
      subscriptionEndDate: "2020-5-8",
      subscriptionAmount: 500,
      _id: "644e6f0ec5e579004e64ca67",
    },
    {
      name: "Aman Chaudhary",
      email: "amanc1248@gmail.com",
      joinedDate: "2023-25-36",
      userType: "Free",
      subscriptionType: "Free",
      subscriptionStartDate: "2000-3-25",
      subscriptionEndDate: "2020-5-8",
      subscriptionAmount: 500,
      _id: "644e6f0ec5e579004e64ca67",
    },
    {
      name: "Aman Chaudhary",
      email: "amanc1248@gmail.com",
      joinedDate: "2023-25-36",
      userType: "Free",
      subscriptionType: "Free",
      subscriptionStartDate: "2000-3-25",
      subscriptionEndDate: "2020-5-8",
      subscriptionAmount: 500,
      _id: "644e6f0ec5e579004e64ca67",
    },
    {
      name: "Aman Chaudhary",
      email: "amanc1248@gmail.com",
      joinedDate: "2023-25-36",
      userType: "Free",
      subscriptionType: "Free",
      subscriptionStartDate: "2000-3-25",
      subscriptionEndDate: "2020-5-8",
      subscriptionAmount: 500,
      _id: "644e6f0ec5e579004e64ca67",
    },
  ];
  // use states
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(false);
  // useEffect
  useEffect(() => {
    const adminToken = getFromLocalStorage(ADMIN_TOKEN_CONSTANT);
    setLoading(true);
    allUsersAdmin({ adminToken })
      .then((response) => {
        setUsers(response);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);
  return <AdminUsersP users={users}></AdminUsersP>;
};
