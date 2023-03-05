import { LoginFormP } from "./LoginForm.p";

export const LoginFormC = ({
  showLoginForm,
  showHideLoginForm,
  showHideRegistrationModal,
  showHideRegistrationLoginModal,
}) => {
  return (
    <LoginFormP
      showLoginForm={showLoginForm}
      showHideLoginForm={showHideLoginForm}
      showHideRegistrationModal={showHideRegistrationModal}
      showHideRegistrationLoginModal={showHideRegistrationLoginModal}
    ></LoginFormP>
  );
};
