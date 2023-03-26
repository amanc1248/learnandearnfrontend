import Modal from "react-bootstrap/Modal";
import "../../../styles/registration.css";
import "../../../styles/homeScreen.css";
import { Step1C } from "./step1/step1.c";
import { Step2C } from "./step2/step2.c";
import { Step3C } from "./step3/step3.c";
import { StatusTextComponentC } from "../../statusText/StatusTextComponent.c";
export const RegistrationFormP = ({
  showRegistrationModal,
  showHideRegistrationModal,
  activeStep,
  changeActiveStep,
  registrationStatus,
  changeRegistrationStatus,
  registrationFormDetails,
  setRegistrationFormDetails,
  showHideLoginForm,
  showHideRegistrationLoginModal,
}) => {
  return (
    <div>
      <Modal
        show={showRegistrationModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="registration__modal"
        onHide={() => {
          showHideRegistrationModal(false);
          showHideRegistrationLoginModal(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <div className="registration_title__div">
              Complete this form to
              <span className="full__stack__developer__text">
                {" "}
                enroll for free
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
        <div className="already__login__register__div">
          Already have an account?{" "}
          <span
            className="already__login__register__button"
            onClick={() => {
              showHideRegistrationModal(false);
              showHideLoginForm(true);
            }}
          >
            Login Here
          </span>
        </div>
        {registrationStatus.text && (
          <div className="registration__status__text__div">
            <StatusTextComponentC
              isError={registrationStatus.error}
              statusText={registrationStatus.text}
            ></StatusTextComponentC>
          </div>
        )}
        {activeStep === 1 && (
          <Step1C
            showHideRegistrationModal={showHideRegistrationModal}
            changeActiveStep={changeActiveStep}
            changeRegistrationStatus={changeRegistrationStatus}
            registrationFormDetails={registrationFormDetails}
            setRegistrationFormDetails={setRegistrationFormDetails}
            showHideRegistrationLoginModal={showHideRegistrationLoginModal}
          ></Step1C>
        )}
        {activeStep === 2 && (
          <Step2C
            changeRegistrationStatus={changeRegistrationStatus}
            changeActiveStep={changeActiveStep}
            registrationFormDetails={registrationFormDetails}
            setRegistrationFormDetails={setRegistrationFormDetails}
          ></Step2C>
        )}
        {activeStep === 3 && (
          <Step3C
            showHideRegistrationModal={showHideRegistrationModal}
            registrationFormDetails={registrationFormDetails}
            setRegistrationFormDetails={setRegistrationFormDetails}
            changeRegistrationStatus={changeRegistrationStatus}
          ></Step3C>
        )}
      </Modal>
    </div>
  );
};
