import { convertUTCToMonthDateYearFormat } from "../../../../utils/date.utils";
import { PaymentModalC } from "../PaymentModal.c";

export const SinglePaymentPUser = ({ payment,showPaymentModal, changeShowPaymentModal }) => {
  return (
    <li class="list-group-item d-flex justify-content-between align-items-start">
        {showPaymentModal && (
        <PaymentModalC
          paymentId={payment?._id}
          showModal={showPaymentModal}
          changeShowModal={changeShowPaymentModal}
        ></PaymentModalC>
      )}
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
            <div className="bank__name">Bank Name: {payment?.bankName}</div>
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
            height={100}
          />
        </div>
      </div>
      <div>
        <div class="badge bg-primary rounded-pill">Rs. {payment?.amount}</div>
        <br />
        <div className="badge bg-badge text-bg-danger rounded-pill">
          {payment?.reviewStatus}
        </div>
        <div>
          <span
            className="badge bg-badge  text-bg-info"
            onClick={() => {
              changeShowPaymentModal(true);
            }}
          >
            See Details
          </span>
        </div>
      </div>
    </li>
  );
};
