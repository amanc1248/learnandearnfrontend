export const ChangeEmailStep2P = ({
  handleSubmit,
  otp,
  handleOTPChange,
  disabledButton,
  verifyingOTP,
  changingEmail,
}) => {
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="otp">Enter otp *</label>
        </div>
        <input
          type="number"
          id="otp"
          value={otp}
          onChange={(e) => {
            handleOTPChange(e.target.value);
          }}
          className="changeEmail__input__field"
        />
        <div className="changeEmail__button__div">
          <input
            type="submit"
            value={
              verifyingOTP
                ? "Verifying OTP.."
                : (changingEmail ? "Changing Email..." : "Verify OTP")
            }
            disabled={disabledButton}
            className={`changeEmail__button ${
              (verifyingOTP || changingEmail) && "animate__button__when__sendingOrVerifying"
            }`}
          />
        </div>
      </form>
    </div>
  );
};
