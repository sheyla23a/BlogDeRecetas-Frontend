const URL_Recetas = import.meta.env.VITE_API_RECETAS;

const leerRecetasAPI = async () => {
  try {
    const respuesta = await fetch(URL_Recetas);
    const listaRecetas = await respuesta.json();
    return listaRecetas;
  } catch (error) {
    console.log(error);
  }
};

const crearRecetaAPI = async (recetaNueva) => {
  try {
    const respuesta = await fetch(URL_Recetas, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recetaNueva),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

const editarReceta = async (recetaModificada, _id) => {
  try {
    const respuesta = await fetch(`${URL_Recetas}/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recetaModificada),
    });

    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

const obtenerRecetasAPI = async (_id) => {
  try {
    const respuesta = await fetch(`${URL_Recetas}/${_id}`);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

const borrarRecetaAPI = async (_id) => {
  try {
    const respuesta = await fetch(`${URL_Recetas}/${_id}`, {
      method: "DELETE",
    });
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

const userAdmin = {
  correo: "correo@correo.com",
  password: "password",
};

const login = (usuario) => {
  if (
    usuario.correo === userAdmin.correo &&
    usuario.password === userAdmin.password
  ) {
    sessionStorage.setItem("adminKeyRecetas", JSON.stringify(usuario.correo));
    return true;
  } else {
    return false;
  }
};

export {
  leerRecetasAPI,
  crearRecetaAPI,
  editarReceta,
  obtenerRecetasAPI,
  borrarRecetaAPI,
  login,
};
