import { Button, Container, Form } from "react-bootstrap";
import {
  crearRecetaAPI,
  editarReceta,
  obtenerRecetasAPI,
} from "../../helpers/queries.js";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";

const NuevoProducto = ({ editar, titulo }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const navegacion = useNavigate();

  const productoValidado = async (receta) => {
    if (editar) {
      const respuesta = await editarReceta(receta, id);
      const { nombreReceta } = receta;

      if (respuesta.status === 200) {
        Swal.fire({
          title: "Producto Editado",
          text: `El ${nombreReceta} se editó correctamente`,
          icon: "success",
        });

        navegacion("/administrador");
      } else {
        Swal.fire({
          title: "Error al Editar el Producto",
          text: `El ${nombreReceta} no pudo se puedo editar. Intente nuevamente`,
          icon: "error",
        });
      }
    } else {
      const respuesta = await crearRecetaAPI(receta);
      const { nombreReceta } = respuesta;

      if (respuesta.status === 201) {
        Swal.fire({
          title: "Producto Creado",
          text: `El ${nombreReceta} se guardó correctamente`,
          icon: "success",
        });
        reset();
      } else {
        Swal.fire({
          title: "Error al Crear el Producto",
          text: `El ${nombreReceta} no pudo ser cargado. Intente nuevamente`,
          icon: "error",
        });
      }
    }
  };

  const { id } = useParams();

  const editarDatosReceta = async () => {
    const respuesta = await obtenerRecetasAPI(id);

    if (respuesta.status === 200) {
      const resultadoAPI = await respuesta.json();
      const {
        nombreReceta,
        imagen,
        descripcionAmplia,
        descripcionBreve,
        categoria,
        dificultad,
        ingredientes,
      } = resultadoAPI;

      setValue("nombreReceta", nombreReceta);
      setValue("ingredientes", ingredientes);
      setValue("imagen", imagen);
      setValue("categoria", categoria);
      setValue("dificultad", dificultad);
      setValue("descripcionAmplia", descripcionAmplia);
      setValue("descripcionBreve", descripcionBreve);
    }
  };

  useEffect(() => {
    if (editar) {
      editarDatosReceta();
    }
  }, []);

  return (
    <div>
      <Container>
        <h2 className="display-4 mt-5">{titulo}</h2>
        <hr />

        <section className=" bg-white shadow rounded-5  p-3 my-4">
          <Form onSubmit={handleSubmit(productoValidado)}>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bolder fst-normal">
                Nombre de la Receta
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: Tacos de Pollo, Espaguetis a la Carbonara, Ensalada César, Sopa de Tomate, Paella, etc."
                {...register("nombreReceta", {
                  required: "El Nombre la Receta es Obligatoria",
                  minLength: {
                    value: 4,
                    message:
                      "El nombre de la Receta debe tener como minimo 4 caracteres",
                  },
                  maxLength: {
                    value: 40,
                    message:
                      "El nombre del producto debe tener como máximo 40 caracteres",
                  },
                })}
              />
            </Form.Group>

            <Form.Text className="text-danger">
              {errors.nombreReceta?.message}
            </Form.Text>

            <Form.Group className="mb-3">
              <Form.Label className="fw-bolder fst-normal">
                Ingredientes
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: 2 pechugas de pollo, 1 cucharadita de comino, 1/2 taza de salsa, etc."
                {...register("ingredientes", {
                  required: "Los Ingredientes son Obligatorios",
                  minLength: {
                    value: 3,
                    message:
                      "El Ingrediente debe tener como minimo 3 caracteres",
                  },
                  maxLength: {
                    value: 100,
                    message:
                      "El Ingrediente debe tener como máximo 100 caracteres",
                  },
                })}
              />
            </Form.Group>

            <Form.Text className="text-danger">
              {errors.ingredientes?.message}
            </Form.Text>

            <Form.Group className="mb-3">
              <Form.Label className="fw-bolder fst-normal">
                Imagen URL
              </Form.Label>
              <Form.Control
                type="url"
                placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
                {...register("imagen", {
                  required: "La Imagen es obligatoria",
                  pattern: {
                    value: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/,
                    message: "Debe ingresar una URL valida (jpg|jpeg|gif|png)",
                  },
                })}
              />
            </Form.Group>

            <Form.Text className="text-danger">
              {errors.imagen?.message}
            </Form.Text>

            <Form.Group className="mb-3">
              <Form.Label className="fw-bolder fst-normal">
                Categoría
              </Form.Label>
              <Form.Select
                {...register("categoria", {
                  required: "Selecciona una Categoría",
                })}
              >
                <option value="" hidden>
                  -- Seleccione una Opción --
                </option>
                <option value="platoPrincipal">Plato Principal</option>
                <option value="entrada">Entradas</option>
                <option value="postre">Postre</option>
                <option value="desayuno">Desayuno</option>
                <option value="apertivo">Aperitivo</option>
                <option value="sopas">Sopa</option>
                <option value="vegetariano">Vegetariano</option>
                <option value="sinGluten">Sin Gluten</option>
                <option value="vegano">Vegano</option>
              </Form.Select>
            </Form.Group>

            <Form.Text className="text-danger">
              {errors.categoria?.message}
            </Form.Text>

            <Form.Group className="mb-3">
              <Form.Label className="fw-bolder fst-normal">
                Dificultad
              </Form.Label>
              <Form.Select
                {...register("dificultad", {
                  required: "Selecciona una Categoría",
                })}
              >
                <option value="" hidden>
                  -- Seleccione una Opción --
                </option>
                <option value="facil">Fácil</option>
                <option value="intermedio">Intermedio</option>
                <option value="dificil">Difícil</option>
              </Form.Select>
            </Form.Group>

            <Form.Text className="text-danger">
              {errors.dificultad?.message}
            </Form.Text>

            <Form.Group className="mb-3">
              <Form.Label className="fw-bolder fst-normal">
                Descripción Breve
              </Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Ej: Tacos de carne asada: deliciosos tacos mexicanos rellenos de jugosa carne asada, cebolla, cilantro y salsa."
                className="w-100"
                {...register("descripcionBreve", {
                  required: "La Descripcion Breve es Obligatoria",
                  minLength: {
                    value: 5,
                    message:
                      "La Descripcion Breve del producto debe tener como minimo 25 caracteres",
                  },
                  maxLength: {
                    value: 50,
                    message:
                      "La Descripcion Breve del producto debe tener como máximo 120 caracteres",
                  },
                })}
              />
            </Form.Group>

            <Form.Text className="text-danger">
              {errors.descripcionBreve?.message}
            </Form.Text>

            <Form.Group className="mb-3">
              <Form.Label className="fw-bolder fst-normal">
                Descripción Amplia
              </Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Ej: Los tacos de carne asada son una deliciosa especialidad mexicana que combina sabores intensos y frescos. La carne asada..."
                className="w-100"
                {...register("descripcionAmplia", {
                  required: "La Descripcion Amplia es Obligatoria",
                  minLength: {
                    value: 50,
                    message:
                      "La Descripcion Amplia del producto debe tener como minimo 25 caracteres",
                  },
                  maxLength: {
                    value: 300,
                    message:
                      "La Descripcion Amplia del producto debe tener como máximo 120 caracteres",
                  },
                })}
              />
            </Form.Group>

            <Form.Text className="text-danger">
              {errors.descripcionAmplia?.message}
            </Form.Text>

            <Button
              type="submit"
              className="w-100 my-2 fw-bold bgNavFooter"
              variant="success"
            >
              Guardar
            </Button>
          </Form>
        </section>
      </Container>
    </div>
  );
};

export default NuevoProducto;
