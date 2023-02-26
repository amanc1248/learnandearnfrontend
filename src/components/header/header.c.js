import { HeaderP } from "./header.p";

export const HeaderC = ({
  showRegistrationModal,
  showHideRegistrationModal,
}) => {
  return (
    <HeaderP
      showRegistrationModal={showRegistrationModal}
      showHideRegistrationModal={showHideRegistrationModal}
    ></HeaderP>
  );
};
