import { useState } from "react";
import { useParams } from "react-router-dom";

import { OverviewScreenP } from "./OverviewScreen.p";

export const OverviewScreepC = () => {
  // data
  const overviewList = [
    { text: "Learnings", id: 0 },
    { text: "Account", id: 1 },
    { text: "Payment And Plan", id: 2 },
  ];

  // useParams
  const { id } = useParams(); 

  // use states
  const [overviewActiveTab, setOverviewActiveTab] = useState(id ? Number(id) : 1);

  // functions
  const handleOverviewActiveTab = (value) => {
    setOverviewActiveTab(value);
  };

  return (
    <OverviewScreenP
      overviewActiveTab={overviewActiveTab}
      handleOverviewActiveTab={handleOverviewActiveTab}
      overviewList={overviewList}
    ></OverviewScreenP>
  );
};
