export const BillingHistoryP = ({ billingHistoryList }) => {
  return (
    <div className="billing__historyP__div">
      <div className="billing__history__list__div">
        <table className="billing__history__table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Item</th>
              <th>Status</th>
              <th>Total</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {billingHistoryList &&
              billingHistoryList.map((bill) => {
                return (
                  <tr className="single__bill__div" key={bill.id}>
                    <td>{bill?.date}</td>
                    <td>{bill?.item}</td>
                    <td>{bill?.status}</td>
                    <td>{bill?.total}</td>
                    <td>
                      <div className="bill__details__view__button">View</div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
