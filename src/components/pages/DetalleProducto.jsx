import { Container, Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { leerRecetasAPI } from "../../helpers/queries";

const DetalleProducto = () => {
  const { id } = useParams();
  const [receta, setReceta] = useState(null);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      const respuesta = await leerRecetasAPI();
      const recetaEncontrada = respuesta.find((receta) => receta._id === _id);
      setReceta(recetaEncontrada);
    } catch (error) {
      console.log(error);
    }
  };

  if (!receta) {
    return <div className="fw-bold my-5 text-center">No hay recetas</div>;
  }

  const {
    nombreReceta,
    descripcionBreve,
    dificultad,
    ingredientes,
    descripcionAmplia,
    imagen
  } = receta;

  return (
    <>
      <Container
        className="mt-5 d-flex justify-content-between"
        style={{ height: "300px" }}
      >
        <div className="bannerProducto w-100 text-center">
          <h2 className="text-light titulosFuente">{nombreReceta}</h2>
          <p className="text-light">{descripcionBreve}</p>
        </div>
        <img src={imagen} alt="lasagna" className="img-fluid w-50" />
      </Container>

      <Container className="mt-5">
        <Row>
          <Col
            xs={12}
            md={5}
            lg={5}
            className="border border-1 me-md-5 mb-3 mb-md-0"
          >
            <section className="listaIngredientes">
              <h3 className="mt-3">{"Ingredientes:"}</h3>
              <hr />
              <ul className="mt-3">{ingredientes}</ul>
            </section>
          </Col>

          <Col xs={12} md={6} className="listaIngredientes">
            <section>
              <h3>{"Preparacion de la receta:"}</h3>
              <hr />
                <p>{descripcionAmplia}</p>
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DetalleProducto;
