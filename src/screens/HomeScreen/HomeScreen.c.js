import React, {useState} from "react";
import {HomeScreenP} from "./HomeScreen.p.js";
export const HomeScreenC = ({showRegistrationModal,showHideRegistrationModal }) => {

  return <HomeScreenP showRegistrationModal={showRegistrationModal} showHideRegistrationModal={showHideRegistrationModal}></HomeScreenP>;
};
