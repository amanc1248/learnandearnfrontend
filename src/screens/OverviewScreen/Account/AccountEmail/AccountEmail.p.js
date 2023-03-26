import "../../../../styles/overviewScreen.css";
import { ChangeEmailC } from "./ChangeEmail.c";
export const AccountEmailP = ({ email, changeEmail, handleOnChange }) => {
  return (
    <div>
      {changeEmail ? (
        <ChangeEmailC handleOnChange={handleOnChange}></ChangeEmailC>
      ) : (
        <div>
          <div className="subtitle__plus__change__button">
            <div className="account__subtitle">Email</div>
            <div
              className="email__password__change__button"
              onClick={()=>{handleOnChange(true)}}
            >
              Change
            </div>
          </div>
          <input type="email" value={email} disabled={true} />
        </div>
      )}
    </div>
  );
};
