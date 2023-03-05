import React, { useState } from "react";
import { HeaderC } from "../../components/header/header.c";
import { RegistrationLoginFormComponent } from "../../components/registrationLoginForm/registrationLoginForm.c";
import { HomeScreenC } from "./HomeScreen.c";

export const HomeScreen = () => {
    // use states
    const [showRegistrationLoginModal, setShowRegistrationLoginModal] = useState(false);

    // functions
    const showHideRegistrationLoginModal = (value) => {
      setShowRegistrationLoginModal(value);
    };
  return (
    <>
      <HeaderC showRegistrationModal={showRegistrationLoginModal} showHideRegistrationModal={showHideRegistrationLoginModal}></HeaderC>
      <HomeScreenC showRegistrationModal={showRegistrationLoginModal} showHideRegistrationModal={showHideRegistrationLoginModal}></HomeScreenC>
      {showRegistrationLoginModal && <RegistrationLoginFormComponent showRegistrationLoginModal={showRegistrationLoginModal} showHideRegistrationLoginModal={showHideRegistrationLoginModal}></RegistrationLoginFormComponent>}
    </>
  );
};
