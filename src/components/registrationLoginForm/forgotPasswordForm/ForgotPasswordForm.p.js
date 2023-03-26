import React from "react";
import Modal from "react-bootstrap/Modal";
import { StatusTextComponentC } from "../../statusText/StatusTextComponent.c";
import { ForgotPasswordStep1C } from "./step1/ForgotPasswordStep1.c";
import { ForgotPasswordStep2C } from "./step2/ForgotPasswordStep2.c";
import { ForgotPasswordStep3C } from "./step3/ForgotPasswordStep3.c";
export const ForgotPasswordFormP = ({
  showForgotPasswordForm,
  showHideForgotPasswordForm,
  showHideRegistrationModal,
  showHideRegistrationLoginModal,
  activeStep,
  changeForgotPasswordStatus,
  changeActiveStep,
  forgotPasswordStatus,
  email,
  handleOnEmailChange,
}) => {
  return (
    <div>
      <Modal
        show={showForgotPasswordForm}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="registration__modal"
        onHide={() => {
          showHideForgotPasswordForm(false);
          showHideRegistrationLoginModal(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <div className="registration_title__div">
              Complete this form
              <span className="full__stack__developer__text">
                {" "}
                to reset password
              </span>
            </div>
          </Modal.Title>
        </Modal.Header>
        <div className="homeScreen__courseOverview__list">
          <ul>
            <li className="courseOverview__single__list">
              ✅1-on-1 coding classes tailored to your kid's skill-level and
              interests.
            </li>
            <li className="courseOverview__single__list">
              ✅Expert teachers that kids love.
            </li>
            <li className="courseOverview__single__list">
              ✅Learn to code real-world projects like games, apps and
              animations.
            </li>
          </ul>
        </div>
        {forgotPasswordStatus.text && (
          <div className="registration__status__text__div">
            <StatusTextComponentC
              isError={forgotPasswordStatus.error}
              statusText={forgotPasswordStatus.text}
            ></StatusTextComponentC>
          </div>
        )}
        {activeStep === 1 && (
          <ForgotPasswordStep1C
            email={email}
            handleOnEmailChange={handleOnEmailChange}
            showHideRegistrationModal={showHideRegistrationModal}
            showHideRegistrationLoginModal={showHideRegistrationLoginModal}
            changeActiveStep={changeActiveStep}
            changeForgotPasswordStatus={changeForgotPasswordStatus}
          ></ForgotPasswordStep1C>
        )}
        {activeStep === 2 && (
          <ForgotPasswordStep2C
            email={email}
            changeActiveStep={changeActiveStep}
            changeForgotPasswordStatus={changeForgotPasswordStatus}
          ></ForgotPasswordStep2C>
        )}
        {activeStep === 3 && (
          <ForgotPasswordStep3C
            showHideRegistrationModal={showHideRegistrationModal}
            email={email}
            changeForgotPasswordStatus={changeForgotPasswordStatus}
          ></ForgotPasswordStep3C>
        )}
      </Modal>
    </div>
  );
};
