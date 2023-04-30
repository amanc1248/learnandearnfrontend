import { useState } from "react";
import { AdminLoginScreenP } from "./AdminLoginScreen.p";

export const AdminLoginScreenC = () => {
  // usestates
  const [loggingIn, setLoggingIn] = useState(false);

  // functions
  const handleOnSubmit = () => {};
  return (
    <AdminLoginScreenP
      loggingIn={loggingIn}
      handleOnSubmit={handleOnSubmit}
    ></AdminLoginScreenP>
  );
};
