import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import TheatersIcon from "@mui/icons-material/Theaters";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function NavigationBar() {
  return (
    <>
      <Navbar expand="lg" className="navBar" bg="dark">
        <Container>
          <Navbar.Brand href="#home">
            <div className="logo mt-3">
              <TheatersIcon color="secondary" className="me-3 mt-1" />
              <p>MOVIESLIST</p>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/" className="link-nav">
                <Nav.Link href="#home" className="nav-item">
                  Inicio
                </Nav.Link>
              </Link>
              <Link to="/movies" className="link-nav">
                <Nav.Link href="#link" className="nav-item">
                  Peliculas
                </Nav.Link>
              </Link>
              <Link to="/about" className="link-nav">
                <Nav.Link href="#link" className="nav-item">
                  Acerca De
                </Nav.Link>
              </Link>
              <button className="nav-button">Iniciar Sesion</button>
              <button className="nav-button">Registrarse</button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
