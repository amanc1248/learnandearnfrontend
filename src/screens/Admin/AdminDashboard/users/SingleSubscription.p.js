import { convertUTCToMonthDateYearFormat } from "../../../../utils/date.utils";
import { SubscriptionModalC } from "../SubscriptionModal.c";

export const SingleSubscriptionP = ({
  subscription,
  showSubscriptionModal,
  changeShowSubscriptionModal,
}) => {
  return (
    <li class="list-group-item d-flex justify-content-between align-items-start">
      {showSubscriptionModal && (
        <SubscriptionModalC
          subscriptionId={subscription?._id}
          showModal={showSubscriptionModal}
          changeShowModal={changeShowSubscriptionModal}
        ></SubscriptionModalC>
      )}
      <div class="ms-2 me-auto">
        <div class="fw-bold">{subscription?.subscriptionType}</div>
        <div className="subscription__start__date">
          Start Date:{" "}
          {convertUTCToMonthDateYearFormat({
            utcDateString: subscription?.subscriptionStartDate,
          })}
        </div>
        <div className="subscription__end__date">
          End Date:{" "}
          {convertUTCToMonthDateYearFormat({
            utcDateString: subscription?.subscriptionEndDate,
          })}
        </div>
      </div>
      <div>
        <div>
          <span class="badge bg-primary rounded-pill">
            Rs. {subscription?.subscriptionAmount}
          </span>
          <div>
            <span
              className="badge text-bg-info"
              onClick={() => {
                changeShowSubscriptionModal(true);
              }}
            >
              See Details
            </span>
          </div>
        </div>
      </div>
    </li>
  );
};
