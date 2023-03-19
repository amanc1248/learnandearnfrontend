import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import "../../styles/header.css";
import "../../styles/account.css";
import { AccountC } from "../account/account.c";
export const HeaderP = ({
  showHideRegistrationModal,
  showAccounts,
  handleShowAccounts,
  isLoggedIn,
  userDetails,
}) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
      <Container fluid className="p-0 header__container__div">
        <Navbar.Brand href="#home" className="brand__name">
          CODE VALLEY
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="ml-auto nav__div">
            {isLoggedIn && (
              <div className="account__login">
                <div className="username__welcome__text">
                  <div className="username__div">{userDetails?.name}</div>
                  <div className="welcome__back__text">Welcome !</div>
                </div>
                <FontAwesomeIcon
                  className="account__login__icon"
                  icon={faCircleUser}
                  style={{ fontSize: "40px" }}
                  onClick={() => {
                    handleShowAccounts(!showAccounts);
                  }}
                />
                {showAccounts && (
                  <div className="account__div__popup">
                    <AccountC></AccountC>
                  </div>
                )}
              </div>
            )}
            {!isLoggedIn && <button
              className="enroll__for__free__button"
              onClick={() => {
                showHideRegistrationModal(true);
              }}
            >
              Enroll For Free
            </button>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
