import { Routes, Route } from "react-router-dom";
import Administrador from "../pages/Administrador";
import NuevoProducto from "../pages/NuevoProducto";

const RutasAdmin = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Administrador />} />
        <Route
          exact
          path="/crear-producto"
          element={
            <NuevoProducto editar={false} titulo="Agregar Nueva Receta" />
          }
        />
        <Route
          exact
          path="/editar-producto/:id"
          element={<NuevoProducto editar={true} titulo="Editar Receta" />}
        />
      </Routes>
    </>
  );
};

export default RutasAdmin;
