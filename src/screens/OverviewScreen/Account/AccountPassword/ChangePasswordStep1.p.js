import {StatusTextComponentC} from "../../../../components/statusText/StatusTextComponent.c"
export const ChangePasswordStep1P = ({
  newPassword,
  confirmNewPassword,
  currentPassword,
  onChangeNewPassword,
  onChangeConfirmNewPassword,
  onChangeCurrentPassword,
  handleOnSubmit,
  changePasswordStatus,
}) => {
  return (
    <div>
      <form action="" onSubmit={handleOnSubmit}>
        {changePasswordStatus.text && <div>
          <StatusTextComponentC
          isError={changePasswordStatus.error}
          statusText={changePasswordStatus.text}
          ></StatusTextComponentC>
          </div>}
        <div className="password__creating__instruction">
          Make sure your password is at least 8 characters and contains at least
          1 uppercase letter, 1 lowercase letter, 1 number, and 1 special
          character (like @#%^). Avoid common passwords or strings like
          “password”, “qwerty”, or “12345”.
        </div>
        <div>
          <label htmlFor="newPassword">New Password *</label>
        </div>

        <input
          type="password"
          id="newPassword"
          required
          value={newPassword}
          onChange={(e) => {
            onChangeNewPassword(e.target.value);
          }}
          className="changeEmail__input__field"
        />
        <br />
        <br />
        <div>
          <label htmlFor="confirmNewPassword">Confirm New Password *</label>
        </div>
        <input
          type="password"
          id="confirmNewPassword"
          required
          value={confirmNewPassword}
          onChange={(e) => {
            onChangeConfirmNewPassword(e.target.value);
          }}
          className="changeEmail__input__field"
        />
        <br />
        <br />
        <div>
          <label htmlFor="currentPassword">Current Password *</label>
        </div>
        <input
          type="password"
          id="currentPassword"
          required
          value={currentPassword}
          onChange={(e) => {
            onChangeCurrentPassword(e.target.value);
          }}
          className="changeEmail__input__field"
        />
        <div className="changeEmail__button__div">
          <input
            type="submit"
            value="Save"
            // disabled={disableButton}
            className={`changeEmail__button`}
          />
        </div>
      </form>
    </div>
  );
};
