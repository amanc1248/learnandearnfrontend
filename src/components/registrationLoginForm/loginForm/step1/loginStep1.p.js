export const LoginStep1P = ({
  loginFormDetails,
  onHandleSubmit,
  handleEmailChange,
  handlePasswordChange,
  showHideRegistrationModal,
  showHideRegistrationLoginModal,
  loggingIn,
}) => {
  return (
    <form onSubmit={onHandleSubmit}>
      <div className="user__details__input__div">
        <div className="user__details__input__div user__details__fullName">
          <input
            type="email"
            placeholder="Email"
            className="user__input__div"
            required
            id="email"
            name="email"
            value={loginFormDetails.email}
            onChange={(e) => {
              handleEmailChange(e.target.value);
            }}
          />
        </div>
        <div className="user__details__input__div user__details__email">
          <input
            type="password"
            placeholder="password"
            className="user__input__div"
            required
            id="password"
            name="password"
            value={loginFormDetails.password}
            onChange={(e) => {
              handlePasswordChange(e.target.value);
            }}
          />
        </div>
      </div>
      <hr />
      <div className="cancel__submit__buttons__div row">
        <div className="col-lg-6 col-12 empty__div"></div>
        <div className="col-lg-6 col-12 cancel__submit__buttons">
          <div
            className="cancel__button__div"
            onClick={() => {
              showHideRegistrationModal(false);
              showHideRegistrationLoginModal(false);
            }}
          >
            Cancel
          </div>
          <input
            className={`submit__button__div ${
              loggingIn && "sending__otp__class"
            }`}
            type="submit"
            value={loggingIn ? "Loggin In..." : "Login"}
            disabled={loggingIn}
          />
        </div>
      </div>
    </form>
  );
};
