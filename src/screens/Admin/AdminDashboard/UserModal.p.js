import { Modal } from "react-bootstrap";
import "../../../styles/userModal.css";
import { convertUTCToMonthDateYearFormat } from "../../../utils/date.utils";
import { PaymentModalC } from "./PaymentModal.c";
import { SubscriptionModalC } from "./SubscriptionModal.c";
import { SingleSubscriptionC } from "./users/SingleSubscription.c";
import { SinglePaymentC } from "./users/SinglePayment.c";
export const UserModalP = ({
  userDetails,
  showModal,
  changeShowModal,
  showPaymentModal,
  changeShowPaymentModal,
  showSubscriptionModal,
  changeShowSubscriptionModal,
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
        <Modal.Title>{userDetails?.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="user__modal__p__div">
          {/* user details div */}
          <div className="table-responsive user__details__div">
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
                <tr className="single__user">
                  <td>{userDetails?.name}</td>
                  <td>{userDetails?.email}</td>
                  <td>{userDetails?.joinedDate}</td>
                  <td>{userDetails?.userType}</td>
                  <td>
                    <div className="subscription__type__div">
                      <span>{userDetails?.subscriptionType}</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <div>
                        <span className="subscription__start__date__title">
                          Start Date:{" "}
                        </span>{" "}
                        <span className="subscription__start__date__value">
                          {userDetails?.subscriptionStartDate}
                        </span>
                      </div>
                      <div>
                        <span className="subscription__start__date__title">
                          End Date:{" "}
                        </span>{" "}
                        <span className="subscription__start__date__value">
                          {userDetails?.subscriptionEndDate}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>{userDetails?.subscriptionAmount}</td>
                  <td>Payment</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="row">
            {/* subscription details div */}
            <div className="user__subscription__details__div col-lg-6 col-md-6 col-12">
              <h5>Subscription Details</h5>

              <ol class="list-group list-group-numbered">
                {userDetails?.subscriptions.length
                  ? userDetails?.subscriptions.map((subscription) => (
                      <SingleSubscriptionC
                        subscription={subscription}
                      ></SingleSubscriptionC>
                    ))
                  : "No subscription, which is not possible"}
              </ol>
            </div>

            {/* payment details div */}
            <div className="user__payment__details__div col-lg-6 col-md-6 col-12">
              <h5>Payment Details</h5>
              <ol class="list-group list-group-numbered">
                {userDetails?.payments.length
                  ? userDetails?.payments.map((payment) => (
                      <SinglePaymentC payment={payment}></SinglePaymentC>
                    ))
                  : "No payments"}
              </ol>
            </div>
          </div>
        </div>
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
