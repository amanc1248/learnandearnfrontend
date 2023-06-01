import { useEffect, useState } from "react";
import { UpgradeToProP } from "./UpgradeToPro.p";
import {
  faRoadBarrier,
  faChartLine,
  faFlask,
  faCertificate,
} from "@fortawesome/free-solid-svg-icons";
import { getFromLocalStorage } from "../../../utils/localStorage.utils";
import { getPaymentStatus } from "../../../actions/payment.actions";
import { USER_TOKEN_CONSTANT } from "../../../constants/localstorage.constants";
export const UpgradeToProC = () => {
  const stepsGuidesList = [
    {
      icon: faRoadBarrier,
      title: "Step-by-step guidance",
      description:
        "Career Paths and Skill Paths tell you what to learn and in what order.",
    },
    {
      icon: faChartLine,
      title: "Better knowledge retention",
      description:
        "Practice packs and quizzes help you remember what you’ve learned.",
    },
    {
      icon: faFlask,
      title: "Real-world experience",
      description:
        "Projects let you try on your own and learn from your mistakes.",
    },
    {
      icon: faCertificate,
      title: "Tangible proof of progress",
      description:
        "Get a certificate of completion for every course you finish.",
    },
  ];

  return (
    <UpgradeToProP
      stepsGuidesList={stepsGuidesList}
    ></UpgradeToProP>
  );
};
