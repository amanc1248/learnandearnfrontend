import "../../../../styles/buttons.css";
import "../../../../styles/adminUsers.css";
import { SingleUserC } from "./SingleUser.c";
export const AdminUsersP = ({ users }) => {
  return (
    <div className="admin__users__div table-responsive">
      {users && users.length > 0 && (
        <table className="table table-hover table-bordered ">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Joined Date</th>
              <th scope="col">User Type</th>
              <th scope="col">Subscription Type</th>
              <th scope="col">Subscription Date</th>
              <th scope="col">Subscription Amount (Rs.)</th>
              <th scope="col">Payment Details</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return <SingleUserC user={user}></SingleUserC>;
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};
