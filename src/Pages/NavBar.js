import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import ioncs from '../assert/ioncs.jpg';


function NavBar() {
  return (
    <Navbar expand="lg" className="bg-white shadow-sm py-3">
      <Container>
        <Navbar.Brand href="/" className="fw-bold fs-1 text-primary">
          <img className=' w-25' src={ioncs} />

          Travelo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto me-3">
            <Nav.Link href="/" className="px-3 fw-semibold">Home</Nav.Link>
            <Nav.Link href="#destinations" className="px-3 fw-semibold">Destinations</Nav.Link>
            <Nav.Link href="#tours" className="px-3 fw-semibold">Tours</Nav.Link>
            <Nav.Link href="#blog" className="px-3 fw-semibold">Blog</Nav.Link>
            <Nav.Link href="#contact" className="px-3 fw-semibold">Contact</Nav.Link>
            <Nav.Link href="/about" className="px-3 fw-semibold">About</Nav.Link>
            <Nav.Link href="/login" className="px-3 fw-semibold">Login</Nav.Link>
            <Nav.Link href="#register" className="px-3 fw-semibold">Register</Nav.Link>
            <Nav.Link href="#support" className="px-3 fw-semibold">Support</Nav.Link>

          </Nav>
          <Button variant="primary" className="px-4 rounded-pill">
            Book Now
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;
