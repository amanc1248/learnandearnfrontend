import React from "react";
import Modal from "react-bootstrap/Modal";
import { LoginStep1C } from "./step1/loginStep1.c";

export const LoginFormP = ({
  showLoginForm,
  showHideLoginForm,
  showHideRegistrationModal,
  showHideRegistrationLoginModal,
}) => {
  return (
    <div>
      <Modal
        show={showLoginForm}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="registration__modal"
        onHide={() => {
          showHideLoginForm(false);
          showHideRegistrationLoginModal(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <div className="registration_title__div">
              Complete this form
              <span className="full__stack__developer__text"> to login</span>
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
        <div className="already__login__register__div">
          New here?{" "}
          <span
            className="already__login__register__button"
            onClick={() => {
              showHideRegistrationModal(true);
              showHideLoginForm(false);
            }}
          >
            Create new account
          </span>
        </div>
        <LoginStep1C
          showHideRegistrationModal={showHideRegistrationModal}
          showHideRegistrationLoginModal={showHideRegistrationLoginModal}
        ></LoginStep1C>
      </Modal>
    </div>
  );
};
