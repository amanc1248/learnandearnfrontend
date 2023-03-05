import "../../../../styles/registration.css";
import "../../../../styles/homeScreen.css";
export const Step1P = ({
  showHideRegistrationModal,
  onHandleSubmit,
  registrationFormDetails,
  handleFullNameChange,
  handleEmailChange,
  sendingOTP,
  showHideRegistrationLoginModal,
}) => {
  return (
    <form onSubmit={onHandleSubmit}>
      <div className="user__details__input__div">
        <div className="user__details__input__div user__details__fullName">
          <input
            type="text"
            placeholder="Full Name"
            className="user__input__div"
            required
            id="fullName"
            name="fullName"
            value={registrationFormDetails.fullName}
            onChange={(e)=>{
              handleFullNameChange(e.target.value)
            }}
          />
        </div>
        <div className="user__details__input__div user__details__email">
          <input
            type="email"
            placeholder="Email"
            className="user__input__div"
            required
            id="email"
            name="email"
            value={registrationFormDetails.email}
            onChange={(e)=>{
              handleEmailChange(e.target.value)
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
          <input className={`submit__button__div ${sendingOTP &&"sending__otp__class" }`} type="submit" value={sendingOTP ? "Sending OTP...": "Submit"} disabled={sendingOTP}  />
        </div>
      </div>
    </form>
  );
};
