import "../../../../styles/overviewScreen.css"
export const AccountEmailP = ({email}) => {
  return (
    <div>
      <div className="account__subtitle">Email</div>
      <input type="email" value={email} disabled={true} />
    </div>
  );
};
