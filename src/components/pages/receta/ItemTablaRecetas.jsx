import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { borrarRecetaAPI, leerRecetasAPI } from "../../../helpers/queries";

import Swal from "sweetalert2";

const ItemTablaRecetas = ({ receta, setRecetas }) => {
  const {
    id,
    nombreReceta,
    imagen,
    descripcionBreve,
    ingredientes,
    categoria,
  } = receta;

  const borrarReceta = () => {
    Swal.fire({
      title: "¿Estas seguro de eliminar esta receta?",
      text: "No se puede revertir este proceso",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar"
    }).then( async (result) => {
      if (result.isConfirmed) {
        const respuesta = await borrarRecetaAPI(receta.id);
        if(respuesta.status === 200){
          Swal.fire({
            title: "Receta eliminada",
            text: `La receta "${receta.nombreReceta}" fue eliminada correctamente`,
            icon: "success"
          });

          const listaRecetas = await leerRecetasAPI();
          setRecetas(listaRecetas);

        } else {
          Swal.fire({
            title: "Ocurrio un error",
            text: `La receta "${receta.nombreReceta}" no fue eliminada. Intente realizar esta operacion en unos minutos`,
            icon: "error"
          });
        }
        
      }
    });
  }

  return (
    <tr>
      <td>{id}</td>
      <td>{nombreReceta}</td>
      <td>
        <img
          src={imagen}
          className="img-thumbnail tamanioImagenReceta"
          alt={nombreReceta}
        ></img>
      </td>
      <td>{descripcionBreve}</td>
      <td>{ingredientes}</td>
      <td>{categoria}</td>
      <td>
        <div className="d-flex gap-2">
          <Link
            to={`/administrador/editar-producto/${id}`}
            className="btn btn-warning my-1"
          >
            <i className="bi bi-pencil-square"></i>
          </Link>
          <Button variant="danger" className="py-1 my-1" onClick={borrarReceta}>
            <i className="bi bi-trash3"></i>
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default ItemTablaRecetas;
