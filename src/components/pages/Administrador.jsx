import { useEffect, useState } from "react";
import { leerRecetasAPI } from "../../helpers/queries";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemTablaRecetas from "./receta/ItemTablaRecetas";

const Administrador = () => {
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
    <section className="container my-4">
      <div className="d-flex justify-content-between align-items-start">
        <h1 className="mb-3">Recetas disponibles</h1>
        <Link className="btn btn-success" to="/administrador/crear-producto">
          <i className="bi bi-pencil-square"></i>
        </Link>
      </div>
      <Table responsive striped bordered hover className="mt-4 text-center">
        <thead>
          <tr>
            <th>Código</th>
            <th>Nombre</th>
            <th>URL Imagen</th>
            <th>Descripción</th>
            <th>Ingredientes</th>
            <th>Categoria</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {recetas && recetas.length > 0 ? (
            recetas.map((receta) => (
              <ItemTablaRecetas
                key={receta.id}
                receta={receta}
                setRecetas={setRecetas}
              />
            ))
          ) : (
            <p className="text-center fw-bold">No hay recetas...</p>
          )}
        </tbody>
      </Table>
    </section>
  );
};

export default Administrador;
