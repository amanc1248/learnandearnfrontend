import { SingleItemLoaderC } from "../../../../components/loader/singleItemLoader/SingleItemLoader.c";
import { convertUTCToMonthDateYearFormat } from "../../../../utils/date.utils";
import { PaymentDetailsC } from "./PaymentDetails.c";

export const YourSubscriptionP = ({ subscription, loading }) => {
  return (
    <div className="yourSubscriptionP__div">
      {loading && <SingleItemLoaderC></SingleItemLoaderC>}
      {!loading && subscription && (
        <div className="your__subscription__list table-responsive">
          Your Subscription Detail
          <table className="billing__history__table table table-hover">
            <thead>
              <tr>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Subscription Amount</th>
                <th>Subscription Type</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr key={subscription._id}>
                <td>
                  {convertUTCToMonthDateYearFormat({
                    utcDateString: subscription?.subscriptionStartDate,
                  })}
                </td>
                <td>
                  {convertUTCToMonthDateYearFormat({
                    utcDateString: subscription?.subscriptionEndDate,
                  })}
                </td>
                <td>{subscription?.subscriptionAmount}</td>
                <td>{subscription?.subscriptionType}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      {!loading &&
        subscription &&
        subscription?.subscriptionType === "Free" && (
          <PaymentDetailsC></PaymentDetailsC>
        )}
    </div>
  );
};
