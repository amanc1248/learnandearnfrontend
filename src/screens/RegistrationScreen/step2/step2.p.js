export const Step2P = ({
  onHandleBack,
  onHandleSubmit,
  handleOTPChange,
  otp,
}) => {
  return (
    <form onSubmit={onHandleSubmit}>
      <div className="user__details__input__div">
        <div className="user__details__input__otp">
          <input
            type="number"
            className="user__input__div"
            required
            id="OTP"
            name="OTP"
            value={otp}
            onChange={(e)=>{handleOTPChange(e.target.value)}}
          />
        </div>
      </div>
      <hr />
      <div className="cancel__submit__buttons__div row">
        <div className="col-lg-6 col-12 empty__div"></div>
        <div className="col-lg-6 col-12 cancel__submit__buttons">
          <div
            className="cancel__button__div"
            onClick={(e) => {
              onHandleBack(e);
            }}
          >
            Back
          </div>
          <input className="submit__button__div" type="submit" value="Verify" />
        </div>
      </div>
    </form>
  );
};
