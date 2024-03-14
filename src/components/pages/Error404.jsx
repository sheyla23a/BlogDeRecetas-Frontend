import { Link } from "react-router-dom";
import error from "../../assets/error.jpg";
import { Container } from "react-bootstrap";

const Error404 = () => {
  return (
    <Container fluid className="text-center my-4 imagenFondoError">
      <div>
        <img
          src={error}
          alt="imgError"
          className="img-fluid imagen-error"
          style={{ maxWidth: "45%", height: "auto", objectFit: "cover" }}
        />
      </div>
      <h1 className="mb-1 fw-bolder tamanioLetraError">Error 404</h1>
      <Link to={"/"} className="btn btn-success mt-3">
        Página principal
      </Link>
    </Container>
  );
};

export default Error404;
