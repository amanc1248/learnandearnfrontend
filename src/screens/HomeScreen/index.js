import React, { useState } from "react";
import { HeaderC } from "../../components/header/header.c";
import { RegistrationScreenC } from "../RegistrationScreen/RegistrationScreen.c";
import { HomeScreenC } from "./HomeScreen.c";

export const HomeScreen = () => {
    // use states
    const [showRegistrationModal, setShowRegistrationModal] = useState(false);

    // functions
    const showHideRegistrationModal = (value) => {
      setShowRegistrationModal(value);
    };
  return (
    <>
      <HeaderC showRegistrationModal={showRegistrationModal} showHideRegistrationModal={showHideRegistrationModal}></HeaderC>
      <HomeScreenC showRegistrationModal={showRegistrationModal} showHideRegistrationModal={showHideRegistrationModal}></HomeScreenC>
      {showRegistrationModal && <RegistrationScreenC showRegistrationModal={showRegistrationModal} showHideRegistrationModal={showHideRegistrationModal}></RegistrationScreenC>}
    </>
  );
};
