import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./coloresInstitucionales.css";
import { valorCL } from "../utils/valorCL";

function Nbar() {
  const total = 25000;
  const token = false;
  return (
    <>
      <Navbar className="red-1" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src="/img/logo.png" alt="logo" width={50} />
          </Navbar.Brand>
          <Nav className="me-auto fw-bold fs-5 ">
            <Nav.Link href="#home">🍕 Home</Nav.Link>
            <Nav.Link
              href="#profile"
              className={token == false ? "d-none" : null} //Operador ternario
            >
              🔓 Profile
            </Nav.Link>{" "}
            <Nav.Link
              href="#Logout"
              className={token == false ? "d-none" : null}
            >
              🔒 Logout
            </Nav.Link>
            <Nav.Link href="#Login" className={token == true ? "d-none" : null}>
              🔐 Login
            </Nav.Link>
            <Nav.Link
              href="#Register"
              className={token == true ? "d-none" : null}
            >
              🔐 Register
            </Nav.Link>
          </Nav>
          <Nav className="fw-bold fs-5 ">
            <Nav.Link active href="#Total" className="rounded yellowbg">
              🛒 Total: $ {valorCL(total)}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Nbar;
