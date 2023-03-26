export const ChangePasswordStep1P = ({
  newPassword,
  confirmNewPassword,
  currentPassword,
  onChangeNewPassword,
  onChangeConfirmNewPassword,
  onChangeCurrentPassword,
  handleOnSubmit,
}) => {
  return (
    <div>
      <form action="" onSubmit={handleOnSubmit}>
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
