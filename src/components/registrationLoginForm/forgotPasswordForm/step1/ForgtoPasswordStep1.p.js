export const ForgotPasswordStep1P = ({
  email,
  onHandleSubmit,
  handleOnEmailChange,
  showHideRegistrationModal,
  showHideRegistrationLoginModal,
  sendingOTP,
}) => {
  return (
    <form onSubmit={onHandleSubmit}>
      <div className="user__details__input__div">
        <div className="user__details__input__div user__details__email">
          <input
            type="email"
            placeholder="Enter email to reset password"
            className="user__input__div"
            required
            id="email"
            name="email"
            value={email}
            onChange={(e) => {
              handleOnEmailChange(e.target.value);
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
              sendingOTP && "sending__otp__class"
            }`}
            type="submit"
            value={sendingOTP ? "Sending OTP..." : "Submit"}
            disabled={sendingOTP}
          />
        </div>
      </div>
    </form>
  );
};
