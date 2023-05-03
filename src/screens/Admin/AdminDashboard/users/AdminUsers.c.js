import { useEffect, useState } from "react";
import { AdminUsersP } from "./AdminUsers.p";

export const AdminUsersC = () => {
  // data
  const list = [
    {
      name: "Aman Chaudhary",
      email: "amanc1248@gmail.com",
      joinedDate: "2023-25-36",
      userType:"Free",
      subscriptionType: "Free",
      subscriptionStartDate: "2000-3-25",
      subscriptionEndDate: "2020-5-8",
      subscriptionAmount:500,
      _id:"644e6f0ec5e579004e64ca67"
    },
    {
      name: "Aman Chaudhary",
      email: "amanc1248@gmail.com",
      joinedDate: "2023-25-36",
      userType:"Free",
      subscriptionType: "Free",
      subscriptionStartDate: "2000-3-25",
      subscriptionEndDate: "2020-5-8",
      subscriptionAmount:500,
      _id:"644e6f0ec5e579004e64ca67"
    },
    {
      name: "Aman Chaudhary",
      email: "amanc1248@gmail.com",
      joinedDate: "2023-25-36",
      userType:"Free",
      subscriptionType: "Free",
      subscriptionStartDate: "2000-3-25",
      subscriptionEndDate: "2020-5-8",
      subscriptionAmount:500,
      _id:"644e6f0ec5e579004e64ca67"
    },
    {
      name: "Aman Chaudhary",
      email: "amanc1248@gmail.com",
      joinedDate: "2023-25-36",
      userType:"Free",
      subscriptionType: "Free",
      subscriptionStartDate: "2000-3-25",
      subscriptionEndDate: "2020-5-8",
      subscriptionAmount:500,
      _id:"644e6f0ec5e579004e64ca67"
    },
    {
      name: "Aman Chaudhary",
      email: "amanc1248@gmail.com",
      joinedDate: "2023-25-36",
      userType:"Free",
      subscriptionType: "Free",
      subscriptionStartDate: "2000-3-25",
      subscriptionEndDate: "2020-5-8",
      subscriptionAmount:500,
      _id:"644e6f0ec5e579004e64ca67"
    },
  ];
  // use states
  const [users, setUsers] = useState();

  // useEffect
  useEffect(() => {
    setUsers(list);
  }, []);
  return <AdminUsersP
    users={users}
  ></AdminUsersP>;
};
