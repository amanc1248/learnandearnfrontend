import { Modal } from "react-bootstrap";
import "../../../../styles/userModal.css";
import { convertUTCToMonthDateYearFormat } from "../../../../utils/date.utils";
export const UserModalP = ({
  user,
  userDetails,
  showModal,
  changeShowModal,
}) => {
  console.log("user: ", user);

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
                      <li class="list-group-item d-flex justify-content-between align-items-start">
                        <div class="ms-2 me-auto">
                          <div class="fw-bold">
                            {subscription?.subscriptionType}
                          </div>
                          <div className="subscription__start__date">
                            Start Date:{" "}
                            {convertUTCToMonthDateYearFormat({
                              utcDateString:
                                subscription?.subscriptionStartDate,
                            })}
                          </div>
                          <div className="subscription__end__date">
                            End Date:{" "}
                            {convertUTCToMonthDateYearFormat({
                              utcDateString: subscription?.subscriptionEndDate,
                            })}
                          </div>
                        </div>
                        <span class="badge bg-primary rounded-pill">
                          Rs. {subscription?.subscriptionAmount}
                        </span>
                      </li>
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
                      <li class="list-group-item d-flex justify-content-between align-items-start">
                        <div class="ms-2 me-auto">
                          <div class="fw-bold">{payment?.method}</div>
                          <div className="payment__date">
                            Payment Date:{" "}
                            {convertUTCToMonthDateYearFormat({
                              utcDateString: payment?.paymentDate,
                            })}
                          </div>

                          {payment?.method === "bankTransfer" && (
                            <div>
                              <div className="bank__name">
                                Bank Name: {payment?.bankName}
                              </div>
                              <div className="bank__account__number">
                                Account Number: {payment?.bankAccountNumber}
                              </div>
                            </div>
                          )}
                          {payment?.method === "walletTransfer" && <div></div>}

                          <div className="payment__image">
                            <img
                              src={payment?.paymentImage}
                              alt="payment"
                              srcset=""
                              height={200}
                            />
                          </div>
                        </div>
                        <div>
                          <div class="badge bg-primary rounded-pill">
                            Rs. {payment?.amount}
                          </div>
                          <br />
                          <div className="badge bg-badge text-bg-info rounded-pill">
                            {payment?.reviewStatus}
                          </div>
                        </div>
                      </li>
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
