import { convertUTCToMonthDateYearFormat } from "../../../../utils/date.utils";
import { UserModalC } from "../UserModal.c";

export const SingleUserP = ({
  user,
  subscription,
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
        <td>{convertUTCToMonthDateYearFormat({utcDateString: user?.joinedDate})}</td>
        <td>{user?.type}</td>
        <td>
          <div className="subscription__type__div">
            <span>{subscription?.subscriptionType}</span>
          </div>
        </td>
        <td>
          <div>
            <div>
              <span className="subscription__start__date__title">
                Start Date:{" "}
              </span>{" "}
              <span className="subscription__start__date__value">
              {convertUTCToMonthDateYearFormat({utcDateString:subscription?.subscriptionStartDate})}
              </span>
            </div>
            <div>
              <span className="subscription__start__date__title">
                End Date:{" "}
              </span>{" "}
              <span className="subscription__start__date__value">
                {convertUTCToMonthDateYearFormat({utcDateString:subscription?.subscriptionEndDate})}
              </span>
            </div>
          </div>
        </td>
        <td>{subscription?.subscriptionAmount}</td>
        <td>Payment</td>
      </tr>
    </>
  );
};
