import { Container, Row, Col, Card, Carousel } from "react-bootstrap";
import banner from "../../assets/banner.png";
import nuevaReceta1 from "../../assets/nuevaReceta1.jpg";
import nuevaReceta2 from "../../assets/nuevaReceta2.jpg";
import nuevaReceta3 from "../../assets/nuevaReceta3.jpg";
import cheft1 from "../../assets/cheft1.jpeg";
import cheft2 from "../../assets/cheft2.jpeg";
import cheft3 from "../../assets/cheft3.jpeg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { leerRecetasAPI } from "../../helpers/queries";
import ItemRecetas from "./receta/ItemRecetas";

const Inicio = () => {
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      const respuesta = await leerRecetasAPI();
      setRecetas(respuesta);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <div id="contenBanner" style={{ maxWidth: "100%" }}>
        <img
          src={banner}
          className="img-fluid img-large"
          alt="banner"
          id="imgBanner"
          style={{ width: "100%", objectFit: "cover" }}
        />
      </div>

      <Container>
        <div className="d-flex justify-content-between align-items-center categoria">
          <h3 className="my-4 mt-5 titulosFuente">RECETAS POPULARES</h3>
          <Link
            to={"/recetas"}
            className="link-secondary link-informacion mt-5 fw-bold h5"
          >
            Otras recetas
          </Link>
        </div>

        <hr />

        <Row className="mb-4 mt-5 ms-4">
          {recetas && recetas.length > 0 ? (
            recetas
              .slice(0, 3)
              .map((receta) => <ItemRecetas key={receta._id} receta={receta} />)
          ) : (
            <p className="text-center fw-bold">No hay recetas disponibles</p>
          )}
        </Row>
      </Container>

      <Container className="mb-md-2 mb-lg-5">
        <div className="d-flex justify-content-between align-items-center">
          <h3 className="my-4 mt-5 titulosFuente">Nuevas Recetas</h3>
        </div>

        <hr />

        <section>
          <Carousel className="carrusel">
            <Carousel.Item>
              <img
                className="img-fluid"
                src={nuevaReceta1}
                alt="Nuevas recetas comida"
              />
              <Carousel.Caption className="mb-3">
                <Link
                  to={`/recetas`}
                  className="btn btn-success boton-carrusel text-light"
                >
                  Ver Recetas
                </Link>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img className="img-fluid" src={nuevaReceta2} alt="comidas" />
              <Carousel.Caption className="mb-3">
                <Link
                  to={`/recetas`}
                  className="btn btn-success boton-carrusel text-light"
                >
                  Ver Recetas
                </Link>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img className="img-fluid" src={nuevaReceta3} alt="postres" />
              <Carousel.Caption className="mb-3">
                <Link
                  to={`/recetas`}
                  className="btn btn-success boton-carrusel text-light"
                >
                  Ver Recetas
                </Link>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </section>
      </Container>

      <Container>
        <div className="d-flex justify-content-between align-items-center">
          <h3 className="my-4 mt-5 titulosFuente">Nuestros Chefts</h3>
        </div>

        <h5>
          {
            "Cada uno de ellos tiene su lugar destacado en nuestro canal, dedicado a compartir las mejores recetas y técnicas de cocina contigo."
          }
        </h5>
        <hr />

        <Row className="mb-4 mt-5 ms-4">
          <Col xs={12} md={6} lg={4}>
            <Card style={{ width: "80%" }} className="mb-3 cheft-card">
              <Card.Img variant="top" src={cheft1} alt="sheyla" />
              <Card.Body className="card-body">
                <Card.Title className="text-light text">
                  Sheyla Astorga
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6} lg={4}>
            <Card style={{ width: "80%" }} className="mb-3 cheft-card">
              <Card.Img variant="top" src={cheft2} alt="juan" />
              <Card.Body>
                <Card.Title className="text-light text">
                  Juan Diego Quintana
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6} lg={4}>
            <Card style={{ width: "80%" }} className="mb-3 cheft-card">
              <Card.Img variant="top" src={cheft3} alt="natalia" />
              <Card.Body>
                <Card.Title className="text-light text">
                  Natalia Morales
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <section className="d-flex flex-column justify-content-center align-items-center mt-5 agradecimientoPirola mb-5 p-4 text-light">
        <h5 className="text-center">
          {
            "¡Agradezco sinceramente tu visita a nuestra página! Estoy emocionada de compartir contigo mis recetas más queridas. Cada plato está lleno de amor y tradición, y espero que encuentres inspiración para tus propias creaciones culinarias. ¡Gracias por ser parte de nuestra comunidad gastronómica! Espero que disfrutes explorando y cocinando conmigo. ¡Bienvenido a mi cocina virtual!"
          }
        </h5>
      </section>
    </section>
  );
};

export default Inicio;
