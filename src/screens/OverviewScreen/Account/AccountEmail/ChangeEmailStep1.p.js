export const ChangeEmailStep1P = ({
  email,
  handleOnSubmit,
  onChangeEmail,
  disableButton,
  sendingOTP,
}) => {
  return (
    <div>
      <form action="" onSubmit={handleOnSubmit}>
        <div>
          <label htmlFor="email">New Email *</label>
        </div>
        <input
          type="email"
          id="email"
          required
          value={email}
          onChange={(e) => {
            onChangeEmail(e.target.value);
          }}
          className="changeEmail__input__field"
        />
        <div className="changeEmail__button__div">
          <input
            type="submit"
            value={sendingOTP ? "Sending OTP..." : "Send OTP"}
            disabled={disableButton}
            className={`changeEmail__button ${
              sendingOTP && "animate__button__when__sendingOrVerifying"
            }`}
          />
        </div>
      </form>
    </div>
  );
};
