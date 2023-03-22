import { useContext } from "react";
import { UserContext } from "../../../HOCs/AuthenticateLogin/AuthenticateLogin.hoc.c";
import { LearningP } from "./Learning.p";

export const LearningC = () => {
  // use context
  const userDetails = useContext(UserContext);
  return <LearningP userDetails={userDetails}></LearningP>;
};
