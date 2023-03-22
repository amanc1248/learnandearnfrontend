import "../../../../styles/overviewScreen.css";
export const AccountEmailP = ({ email, changeEmail }) => {
  return (
    <div>
      <div className="subtitle__plus__change__button">
        <div className="account__subtitle">Email</div>
        <div className="email__password__change__button">Change</div>
      </div>
      <input type="email" value={email} disabled={true} />
    </div>
  );
};
