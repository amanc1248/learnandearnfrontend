import { StatusTextComponentC } from "../../../../components/statusText/StatusTextComponent.c";
import { ChangePasswordStep1C } from "./ChangePasswordStep1.c";

export const ChangePasswordP = ({changePasswordStatus, handleIsShowPasswordChange}) => {
  return (
    <div>
      <div className="subtitle__plus__change__button">
        <div className="account__subtitle">Change Password</div>
        <div
          className="email__password__change__button"
          onClick={() => {
            handleIsShowPasswordChange(false)
          }}
        >
          Cancel
        </div>
      </div>
      {changePasswordStatus?.text && (
        <StatusTextComponentC
          isError={changePasswordStatus?.error}
          statusText={changePasswordStatus?.text}
        ></StatusTextComponentC>
      )}
      <ChangePasswordStep1C></ChangePasswordStep1C>
    </div>
  );
};
