import { Modal } from "react-bootstrap";
import { convertUTCToMonthDateYearFormat } from "../../../utils/date.utils";

export const SubscriptionModalP = ({
  subscription,
  user,
  loading,
  subscriptionId,
  showModal,
  changeShowModal,
}) => {
  return (
    <Modal
      show={showModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      fullscreen
      centered
    >
      <Modal.Header>
        <Modal.Title>
          SUBSCRIPTINO DETAIL: 
          {subscription && user && (
            <div className="subscription__details">
              <div>Name: {user.name}</div>
              <div>Email: {user.email}</div>
              <div></div>
            </div>
          )}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {subscription && (
          <div>
            <div>
              Subscription Start Date:{" "}
              {convertUTCToMonthDateYearFormat({
                utcDateString: subscription?.subscriptionStartDate,
              })}
            </div>
            <div>
              Subscription End Date:{" "}
              {convertUTCToMonthDateYearFormat({
                utcDateString: subscription?.subscriptionEndDate,
              })}
            </div>
            <div>Subscription Type : {subscription?.subscriptionType}</div>
            <div>Subscription Amount : Rs. {subscription?.subscriptionAmount}</div>
            <div>Subscription Status : {subscription?.isSubscriptionActive ? "Active" : "Not Active"}</div>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <button
          onClick={() => {
            changeShowModal(false);
          }}
        >
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
};
