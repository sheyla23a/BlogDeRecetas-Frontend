import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { leerRecetasAPI } from "../../../helpers/queries.js";
import ItemRecetas from "./ItemRecetas";


const Recetas = () => {

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

    if (!recetas) {
        return <div className="fw-bold my-5 text-center">No hay recetas</div>;
      }
      
  return (
    <Container>
      <Row className="mb-4 mt-5 ms-4">
          {recetas.map(receta => (
              <ItemRecetas 
                  key={receta._id}
                  receta={receta}
              />
          ))}
      </Row>
    </Container>
  );
};

export default Recetas;
