import { ChangePasswordC } from "./ChangePassword.c";

export const AccountPasswordP = ({
  isShowPasswordChange,
  handleIsShowPasswordChange,
}) => {
  return (
    <div>
      {isShowPasswordChange ? (
        <ChangePasswordC
          handleIsShowPasswordChange={handleIsShowPasswordChange}
        ></ChangePasswordC>
      ) : (
        <div>
          <div className="subtitle__plus__change__button">
            <div className="account__subtitle">Password</div>
            <div
              className="email__password__change__button"
              onClick={() => {
                handleIsShowPasswordChange(true);
              }}
            >
              Change
            </div>
          </div>
          <input type="password" value="*****************" disabled={true} />
        </div>
      )}
    </div>
  );
};
