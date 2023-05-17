import { Modal } from "react-bootstrap";
import { convertUTCToMonthDateYearFormat } from "../../../utils/date.utils";
import "../../../styles/paymentModal.css";
export const PaymentModalP = ({
  user,
  payment,
  loading,
  showModal,
  changeShowModal,
  changePaymentStatus,
  handleChangePaymentStatus,
  handleOnSavePaymentStatus,
  updatingPayment,
  handleOnChangePaymentStatus,
  paymentStatus,
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
          PAYMENT DETAIL:
          {payment && user && (
            <div className="subscription__details">
              <div>Name: {user?.name}</div>
              <div>Email: {user?.email}</div>
              <div></div>
            </div>
          )}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {payment && (
          <>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <ul class="list-group list-group">
                  Payment Details
                  <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                      <div class="fw-bold">
                        Payment Method: {payment?.method}
                      </div>
                      {payment?.bankName && (
                        <div>Bank Name: {payment?.bankName}</div>
                      )}
                      {payment?.bankAccountNumber && (
                        <div>
                          Bank Account Number: {payment?.bankAccountNumber}
                        </div>
                      )}
                      {payment?.walletName && (
                        <div>Wallet Name: {payment?.walletName}</div>
                      )}
                      <div>Amount: Rs. {payment?.amount}</div>
                      <div>Full Name: {payment?.fullName}</div>
                      <div>Billing Address: {payment?.billingAddress}</div>
                      <div>Item: {payment?.item}</div>
                      <div>
                        Payment Image:
                        <img
                          src={payment?.paymentImage}
                          alt="payment"
                          height={100}
                        />
                      </div>
                      <div>
                        Payment Date:{" "}
                        {convertUTCToMonthDateYearFormat({
                          utcDateString: payment?.paymentDate,
                        })}
                      </div>
                    </div>
                    <span class="badge bg-primary rounded-pill">
                      {payment?.reviewStatus}
                    </span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <ul class="list-group list-group">
                  Additional Information
                  <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                      <div>
                        Additional Information: {payment?.additionalInformation}
                      </div>
                    </div>
                    <span class="badge bg-primary rounded-pill"></span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <button
                onClick={() => {
                  handleChangePaymentStatus(!changePaymentStatus);
                }}
              >
                {!changePaymentStatus
                  ? "Change Payment Status"
                  : "Close change payment status"}
              </button>
              {changePaymentStatus && (
                <form action="" onSubmit={(e)=>{handleOnSavePaymentStatus(paymentStatus,e)}}>
                  <div className="change__payment__status__div">
                    Change to
                    <select
                      name="payment__status__options"
                      id="paymentStatusOptions"
                      onChange={(e) => {
                        handleOnChangePaymentStatus(e.target.value);
                      }}
                      required
                    >
                      <option value="verified">Verified</option>
                      <option value="rejected">Rejected</option>
                    </select>
                    <input type="submit" value="Save"/>
                  </div>
                </form>
              )}
            </div>
          </>
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
