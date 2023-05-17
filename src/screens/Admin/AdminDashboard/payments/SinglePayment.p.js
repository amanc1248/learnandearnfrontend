import { convertUTCToMonthDateYearFormat } from "../../../../utils/date.utils";
import { PaymentModalC } from "../PaymentModal.c";

export const SinglePaymentP = ({
  payment,
  showPaymentModal,
  changeShowPaymentModal,
}) => {
  return (
    <>
      {showPaymentModal && (
        <PaymentModalC
          paymentId={payment?._id}
          showModal={showPaymentModal}
          changeShowModal={changeShowPaymentModal}
        ></PaymentModalC>
      )}
      <tr
        onClick={() => {
          changeShowPaymentModal(true);
        }}
      >
        <td>
          {convertUTCToMonthDateYearFormat({
            utcDateString: payment?.paymentDate,
          })}
        </td>
        <td>{payment?.item}</td>
        <td>{payment?.method}</td>
        <td>{payment?.amount}</td>
        <td>
          {payment?.method === "bankTransfer"
            ? payment?.bankName
            : payment?.walletName}
        </td>
        <td>
          <img src={payment?.paymentImage} alt="payment" height={50} />
        </td>
        <td>
          {payment?.reviewStatus === "inReview" && (
            <span class="badge text-bg-primary">{payment?.reviewStatus}</span>
          )}
          {payment?.reviewStatus === "verified" && (
            <span class="badge text-bg-success">{payment?.reviewStatus}</span>
          )}
          {payment?.reviewStatus === "rejected" && (
            <span class="badge text-bg-danger">{payment?.reviewStatus}</span>
          )}
        </td>

        <td>{payment?.additionalInformation}</td>
      </tr>
    </>
  );
};
