import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, Link, useNavigate } from "react-router-dom";
import logoPriola from "../assets/logoDoñaPirola.png";
import Swal from "sweetalert2";

const Header = ({ usuarioLog, setUsuarioLog }) => {

  const navegacion = useNavigate()

  const cerrarSesion = () => {
    Swal.fire({
      title: "Logout Exitoso",
      text: `Hasta pronto!`,
      icon: "success",
    });

    sessionStorage.removeItem("adminKeyRecetas")
    setUsuarioLog("")

    navegacion('/')
  }

  return (
    <>
      <Navbar expand="lg" className="bgNavFooter shadow">
        <Container>
          <Navbar.Brand as={Link} to={"/"}>
            <img
              src={logoPriola}
              alt="Logo Coffe"
              className="img-fluid"
              width={150}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-center">
              <NavLink end className="nav-link text-white" to="/">
                Inicio
              </NavLink>
              <NavLink end className="nav-link text-white" to="/recetas">
                Recetas
              </NavLink>

              {usuarioLog !== "" ? (
                <>
                  <NavLink
                    end
                    className="nav-link text-white"
                    to="/administrador"
                  >
                    Administrador
                  </NavLink>
                  <Button className="mb-3 nav-link text-light" variant="link" onClick={cerrarSesion}>
                    Cerra Sesión
                  </Button>
                </>
              ) : (
                <>
                  <NavLink end className="nav-link text-white" to="/login">
                    Login
                  </NavLink>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
