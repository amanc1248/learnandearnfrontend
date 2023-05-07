import { UserModalC } from "../UserModal.c";

export const SingleUserP = ({
  user,
  showUserDetails,
  changeShowUserDetails,
}) => {
  return (
    <>
      {showUserDetails && (
        <UserModalC
          user={user}
          showModal={showUserDetails}
          changeShowModal={changeShowUserDetails}
        ></UserModalC>
      )}
      <tr
        className="single__user"
        onClick={() => {
          changeShowUserDetails(true);
        }}
      >
        <td>{user?.name}</td>
        <td>{user?.email}</td>
        <td>{user?.joinedDate}</td>
        <td>{user?.userType}</td>
        <td>
          <div className="subscription__type__div">
            <span>{user?.subscriptionType}</span>
          </div>
        </td>
        <td>
          <div>
            <div>
              <span className="subscription__start__date__title">
                Start Date:{" "}
              </span>{" "}
              <span className="subscription__start__date__value">
                {user?.subscriptionStartDate}
              </span>
            </div>
            <div>
              <span className="subscription__start__date__title">
                End Date:{" "}
              </span>{" "}
              <span className="subscription__start__date__value">
                {user?.subscriptionEndDate}
              </span>
            </div>
          </div>
        </td>
        <td>{user?.subscriptionAmount}</td>
        <td>Payment</td>
      </tr>
    </>
  );
};
