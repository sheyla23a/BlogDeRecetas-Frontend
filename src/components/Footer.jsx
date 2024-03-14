import logoPirola from "../assets/logoDoñaPirola.png";

const Footer = () => {
  return (
    <footer
      className="shadow mt-5 py-5 footerBorder bgNavFooter"
    >
      <section className="container">
        <div className="row">

          <div className="col-md-12 col-lg-3 text-center text-lg-start my-3 mb-lg-0">
            <img
              src={logoPirola}
              alt="Logo Coffe"
              className="img-fluid"
              width={150}
            />
          </div>

          <div className="col-md-6 col-lg-3 text-center text-md-center mb-3">
            <h5 className="fw-bold colorSecundario">Compañía</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="/Error404"
                  className="link-secondary text-decoration-none"
                >
                  Acerca de
                </a>
              </li>
              <li>
                <a
                  href="/Error404"
                  className="link-secondary text-decoration-none"
                >
                  Empleo
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-6 col-lg-3 text-center text-md-center mb-3">
            <h5 className="fw-bold colorSecundario">Comunidades</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="/Error404"
                  className="link-secondary text-decoration-none"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/Error404"
                  className="link-secondary text-decoration-none"
                >
                  Publicidad
                </a>
              </li>
              <li>
                <a
                  href="/Error404"
                  className="link-secondary text-decoration-none"
                >
                  Inversionistas
                </a>
              </li>
              <li>
                <a
                  href="/Error404"
                  className="link-secondary text-decoration-none"
                >
                  Provedores
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-6 col-lg-3 text-center text-md-center mb-3">
            <h5 className="fw-bold colorSecundario">Enlaces Útiles</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="/Error404"
                  className="link-secondary text-decoration-none"
                >
                  Ayuda
                </a>
              </li>
              <li>
                <a
                  href="/Error404"
                  className="link-secondary text-decoration-none"
                >
                  App móvil Gratis
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-top">
          <p className="text-secondary text-center py-3">
            Todos los Derechos Reservados &copy; 2024 - Doña Pirola
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
