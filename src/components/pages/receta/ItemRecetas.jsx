import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemRecetas = ({receta}) => {
    const { nombreReceta, imagen, id, dificultad, descripcionBreve } = receta

  return (
    <Col xs={12} md={6} lg={4}>
    <Card style={{ width: "80%" }} className="mb-5 shadow border border-black">
      <Card.Img variant="top" src={imagen} className=" img-thumbnail img-fluid" id="imagenCard"/>
      <Card.Body className="card-body">
        <Card.Title className="text-light text-uppercase text-center fw-bold">{nombreReceta}</Card.Title>
        <Card.Text className="bg-danger text-center text-white rounded upper">Nivel: <span className="fw-bold text-uppercase">{dificultad}</span></Card.Text>
        <Card.Text className="text-center text-white fst-normal ">{descripcionBreve}</Card.Text>
        <Card.Footer className="d-flex justify-content-center">
          <Link className="btn btn-light w-100 " to={`/recetas/${id}`} >Ver más</Link>
        </Card.Footer>
      </Card.Body>
    </Card>
  </Col>
  );
};

export default ItemRecetas;
