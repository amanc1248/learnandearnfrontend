import { useState } from "react";
import { useParams } from "react-router-dom";
import {AdminDashboardP} from "./AdminDashboard.p"

export const AdminDashboardC = () => {
  // data
  const dashboardList = [
    { text: "Users", id: 0 },
    { text: "Payments", id: 1 },
    { text: "Notifications", id: 2 },
  ];

  // useParams
  const { id } = useParams(); 

  // use states
  const [dashboardActiveTab, setDashboardActiveTab] = useState(id ? Number(id) : 1);

  // functions
  const handleDashboardActiveTab = (value) => {
    setDashboardActiveTab(value);
  };

  return (
    <AdminDashboardP
      dashboardActiveTab={dashboardActiveTab}
      handleDashboardActiveTab={handleDashboardActiveTab}
      dashboardList={dashboardList}
    ></AdminDashboardP>
  );
};
