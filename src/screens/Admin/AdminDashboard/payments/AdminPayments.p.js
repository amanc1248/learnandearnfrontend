import { SinglePaymentC } from "./SinglePayment.c";

export const AdminPaymentsP = ({ payments, loading }) => {
  return (
    <div className="admin__users__div table-responsive">
      {payments && payments.length > 0 && (
        <table className="table table-hover table-bordered ">
          <thead>
            <tr>
              <th scope="col">Payment Date</th>
              <th scope="col">Purchased Item</th>
              <th scope="col">Payment Method</th>
              <th scope="col">Payment Amount (Rs.)</th>
              <th scope="col">Payment Method Name</th>
              <th scope="col">Payment Image</th>
              <th scope="col">Payment Status</th>
              <th scope="col">Additional Information</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => {
              return <SinglePaymentC payment={payment}></SinglePaymentC>;
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};
