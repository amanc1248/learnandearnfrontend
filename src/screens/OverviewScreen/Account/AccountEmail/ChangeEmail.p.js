import { StatusTextComponentC } from "../../../../components/statusText/StatusTextComponent.c";
import { ChangeEmailStep1C } from "./ChangeEmailStep1.c";
import { ChangeEmailStep2C } from "./ChangeEmailStep2.c";

export const ChangeEmailP = ({
  activeStep,
  handleOnChange,
  changeEmailStatus,
}) => {
  return (
    <div>
      <div className="subtitle__plus__change__button">
        <div className="account__subtitle">Change Email</div>
        <div
          className="email__password__change__button"
          onClick={() => {
            handleOnChange(false);
          }}
        >
          Cancel
        </div>
      </div>
      {changeEmailStatus.text && (
        <StatusTextComponentC
          isError={changeEmailStatus.error}
          statusText={changeEmailStatus.text}
        ></StatusTextComponentC>
      )}
      {activeStep === 1 && <ChangeEmailStep1C></ChangeEmailStep1C>}
      {activeStep === 2 && <ChangeEmailStep2C></ChangeEmailStep2C>}
    </div>
  );
};
