import { Modal } from "react-bootstrap";
import "../../../styles/userModal.css";
import { SingleSubscriptionC } from "./users/SingleSubscription.c";
import { SinglePaymentCUser } from "./users/SinglePayment.c";
import { convertUTCToMonthDateYearFormat } from "../../../utils/date.utils";
export const UserModalP = ({
  userDetails,
  showModal,
  changeShowModal,
}) => {
  console.log("User details: ", userDetails)
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
                  <th scope="col">Payment Details</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="single__user">
                  <td>{userDetails?.name}</td>
                  <td>{userDetails?.email}</td>
                  <td>{convertUTCToMonthDateYearFormat({utcDateString: userDetails?.joinedDate})}</td>
                  <td>{userDetails?.type}</td>
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
                      <SinglePaymentCUser payment={payment}></SinglePaymentCUser>
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
