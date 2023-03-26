import { AccountEmailC } from "./AccountEmail/AccountEmail.c";
import { AccountPasswordC } from "./AccountPassword/AccountPassword.c";

export const AccountP = () => {
  return (
    <div>
      <div className="overviewScreenList__tab__title">Account</div>
      <AccountEmailC></AccountEmailC>
      <AccountPasswordC></AccountPasswordC>
    </div>
  );
};
