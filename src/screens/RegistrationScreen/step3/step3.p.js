export const Step3P = ({
  onHandleSubmit,
  password,
  handlePasswordChange,
  handleConfirmPasswordChange,
  passwordHealth,
  registerButtonEnabled,
}) => {
  return (
    <form onSubmit={onHandleSubmit}>
      <div className="user__details__input__div">
        <div className="user__details__input__div user__details__fullName">
          <input
            type="password"
            placeholder="Password"
            className="user__input__div"
            required
            id="password"
            name="password"
            value={password}
            onChange={(e) => {
              handlePasswordChange(e.target.value);
            }}
          />
        </div>
        <div className="user__details__input__div user__details__fullName">
          <input
            type="password"
            placeholder="Confirm Password"
            className="user__input__div"
            required
            id="confirmPassword"
            name="confirmPassword"
            onChange={(e) => {
              handleConfirmPasswordChange(e.target.value);
            }}
          />
        </div>
        {passwordHealth === "password__health__div__weak" && (
          <div className="password__health__div__text password__health__div__weak__text">Weak Password</div>
          )}
        {passwordHealth === "password__health__div__medium" && (
          <div className="password__health__div__text password__health__div__medium__text">
            Moderately Complex
          </div>
        )}
        {passwordHealth === "password__health__div__strong" && (
          <div className="password__health__div__text password__health__div__strong__text">
            Strong Password
          </div>
        )}
        <div className={`password__health__div ${passwordHealth}`}></div>
      </div>
      <hr />
      <div className="cancel__submit__buttons__div row">
        <div className="col-lg-6 col-12 empty__div"></div>
        <div className="col-lg-6 col-12 cancel__submit__buttons">
          <div className="cancel__button__div"></div>
          <input
            className="submit__button__div"
            type="submit"
            value="Register"
            disabled={registerButtonEnabled}
          />
        </div>
      </div>
    </form>
  );
};
