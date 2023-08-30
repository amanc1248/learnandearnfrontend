import { Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

import "../../styles/component/paymentComponent.css";
import { BankTransferC } from "./PaymentMethods/BankTransfer/BankTransfer.c";
import { WalletTransferC } from "./PaymentMethods/WalletTransfer/WalletTransfer.c";
import { TotalAmountC } from "./TotalAmount.c";
import { PaymentLoaderC } from "../loader/paymentLoader/PaymentLoader.c";

export const PaymentComponentP = ({
  showPaymentModal,
  handleChangeShowPaymentModal,
  handleOnBackClick,
  stepsGuidesList,
  handleOnChangePaymentType,
  paymentType,
  paymentMethods,
  paymentPlans,
  onChangeProPaymentPlan,
  handleOnSubmitPayment,
  paymentProcessing,
}) => {
  return (
    <>
      {paymentProcessing && <PaymentLoaderC></PaymentLoaderC>}
      {!paymentProcessing && <Modal
        show={showPaymentModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        fullscreen
        centered
        className="payment__component__modal"
        style={{ background: "#10162F", padding: "0px" }}
      >
        <div className="row g-0">
          {/*payment left section  */}
          <div className="col-lg-4 col-md-4 col-12 payment__steps__guide">
            <div
              className="payment__back__button__text"
              onClick={() => {
                handleChangeShowPaymentModal(false);
                handleOnBackClick(false);
              }}
            >
              <FontAwesomeIcon
                className="payment__back__button__icon"
                icon={faAngleLeft}
                style={{ fontSize: "15px" }}
              />
              Back
            </div>

            <div className="payment__steps__guide__title">
              100% money back guarantee if you dont land a job/internship after completing the course.
            </div>

            <div className="payment__steps__guide__list">
              {stepsGuidesList.map((step) => {
                return (
                  <div
                    className="payment__steps__guide__list__single"
                    key={step.title}
                  >
                    <FontAwesomeIcon
                      className="payment__steps__guide__list__icon"
                      icon={step?.icon}
                      style={{ fontSize: "35px" }}
                    />
                    <div>
                      <div className="payment__steps__guide__list__title">
                        {step?.title}
                      </div>
                      <div className="payment__steps__guide__list__description">
                        {step?.description}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="payment__steps__eligible__forStudents">
              This full stack web development course will be taught by the mid level full stack engineer. And he is not responsible if any students drops the course in the middle or does not follow the course contents. 
            </p>
          </div>

          {/* payment right section */}
          <div className="col-lg-8 col-md-8 col-12 ">
            <form
              action=""
              onSubmit={(e) => {
                handleOnSubmitPayment(e);
              }}
              encType="multipart/form-data"
            >
              <div className="payment__making__section">
                <div className="choose__a__plan__title">Choose a plan</div>
                <div className="select__paymentPlan__type__div">
                  <select
                    name=""
                    id=""
                    className="select__paymentPlan__type"
                    onChange={(e) => {
                      onChangeProPaymentPlan(e.target.value);
                    }}
                  >
                    {paymentPlans.map((pP) => {
                      return (
                        <option key={pP.id} value={pP.id}>
                          {pP.label}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="select__payment__method__title">
                  Select a Payment Method
                </div>
                <div className="select__payment__method__div">
                  {paymentMethods &&
                    paymentMethods.map((pM) => {
                      return (
                        <div className="radio__button__div">
                          <input
                            type="radio"
                            id={pM.id}
                            name="paymentMethod"
                            className="radio__button"
                            onChange={() => {
                              handleOnChangePaymentType(pM.value);
                            }}
                            checked={pM.value === paymentType}
                          />
                          <label htmlFor={pM.id} className="paymentTypeText">
                            {pM.label}
                          </label>
                        </div>
                      );
                    })}
                </div>

                {/* For Bank Transfer */}
                {paymentType === "bankTransfer" && (
                  <BankTransferC></BankTransferC>
                )}
                {paymentType === "walletTransfer" && (
                  <WalletTransferC></WalletTransferC>
                )}
              </div>

              <TotalAmountC></TotalAmountC>
            </form>
          </div>
        </div>
      </Modal>}
    </>
  );
};
