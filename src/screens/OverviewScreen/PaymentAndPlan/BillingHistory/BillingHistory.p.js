import { SingleItemLoaderC } from "../../../../components/loader/singleItemLoader/SingleItemLoader.c";
import { convertUTCToMonthDateYearFormat } from "../../../../utils/date.utils";

export const BillingHistoryP = ({ billingHistoryList, loading }) => {
  return (
    <div className="billing__historyP__div">
      {loading && <SingleItemLoaderC></SingleItemLoaderC>}
      {loading === false && billingHistoryList && (
        <div className="billing__history__list__div table-responsive">
          <table className="billing__history__table table table-hover">
            <thead>
              <tr>
                <th>Date</th>
                <th>Item</th>
                <th>Status</th>
                <th>Payment</th>
                <th>Total</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {billingHistoryList &&
                billingHistoryList.map((bill) => {
                  return (
                    <tr className="single__bill__div" key={bill.id}>
                      <td>
                        {convertUTCToMonthDateYearFormat({
                          utcDateString: bill.date,
                        })}
                      </td>
                      <td>{bill?.item}</td>
                      <td>
                        <span
                          class={`badge ${
                            bill?.reviewStatus === "inReview" &&
                            "text-bg-warning"
                          }
                          ${
                            bill?.reviewStatus === "approved" &&
                            "text-bg-success"
                          }

                          ${
                            bill?.reviewStatus === "rejected" &&
                            "text-bg-warning"
                          }
                          `}
                        >
                          {bill?.reviewStatus}
                        </span>
                      </td>
                      <td>{bill?.paid ? "Paid" : "Not Paid"}</td>
                      <td>Rs. {bill?.amount}</td>
                      <td>
                        <div className="bill__details__view__button">View</div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      )}
      {loading === false && !billingHistoryList && (
        <div>No Billing History</div>
      )}
    </div>
  );
};
