import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../../styles/header.css"
 export const  HeaderP= ({showHideRegistrationModal}) =>{
  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
      <Container fluid className="p-0 header__container__div">
        <Navbar.Brand href="#home" className='brand__name'>SOFTWARE ENGINEER</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav className='ml-auto'>
            <button className='enroll__for__free__button' onClick={()=>{showHideRegistrationModal(true)}}>Enroll For Free</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
