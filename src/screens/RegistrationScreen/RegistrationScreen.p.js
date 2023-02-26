import Modal from "react-bootstrap/Modal";
import "../../styles/registration.css";
import "../../styles/homeScreen.css";
export const RegistrationScreenP = ({
  showRegistrationModal,
  showHideRegistrationModal,
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
        }}
      >
        <form action="">
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
          <Modal.Body>
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
            <div className="user__details__input__div">
              <div className="user__details__input__div user__details__fullName">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="user__input__div"
                  required
                  id="fullName"
                  name="fullName"
                />
              </div>
              <div className="user__details__input__div user__details__email">
                <input
                  type="email"
                  placeholder="Email"
                  className="user__input__div"
                  required
                  id="email"
                  name="email"
                />
              </div>
              <div className="user__details__input__div user__details__phoneNumbner">
                <input
                  type="number"
                  placeholder="Phone Number"
                  className="user__input__div"
                  required
                  id="phoneNumber"
                  name="phoneNumber"
                />
              </div>
            </div>
            <div className="privacy__policy__div">
              <input
                type="checkbox"
                name="privacyPolicy"
                id="privacyPolicy"
                className="checkbox__privacyPolicy"
                required
              />
              I have read and agreed to the privacy policy
            </div>
          </Modal.Body>
          <hr />
          <div className="cancel__submit__buttons__div row">
            <div className="col-lg-6 col-12 empty__div"></div>
            <div className="col-lg-6 col-12 cancel__submit__buttons">
              <div
                className="cancel__button__div"
                onClick={() => {
                  showHideRegistrationModal(false);
                }}
              >
                Cancel
              </div>
              <input
                className="submit__button__div"
                type="submit"
                value="Submit"
              />
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
};
