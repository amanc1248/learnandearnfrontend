export const Step3P = ({
  onHandleSubmit,
  password,
  handlePasswordChange,
  handleConfirmPasswordChange,
  registering,
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
            disabled={registering}
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
            disabled={registering}
          />
        </div>
      </div>
      <div className="user__details__input__div user__details__fullName privacy__policy__div">
        <input type="checkbox" name="privacyPolicy" id="privacyPolicy" className="checkbox__privacyPolicy" required/>
        I have read and agreed to the privacy policy
      </div>
      <hr />
      <div className="cancel__submit__buttons__div row">
        <div className="col-lg-6 col-12 empty__div"></div>
        <div className="col-lg-6 col-12 cancel__submit__buttons">
          <div className="cancel__button__div"></div>
          <input
            className={`submit__button__div ${registering &&"sending__otp__class" }`}
            type="submit"
            value={`${registering ? "Registering" : "Register"}`}
            disabled={registering}
          />
        </div>
      </div>
    </form>
  );
};
