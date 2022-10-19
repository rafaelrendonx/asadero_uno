export function NavBar() {
  return (

    <header className="px-4 text-center">

      <img src={require("../images/logo2bw.png")} alt="Logo" width="350" height="350" />

      <div className="container py-3">
        <ul className="navbar navbar-dark bg-dark justify-content-center col-lg-12 col-md-12 col-sm-12">
          <li className="navbar-text">
            <a className="navbar-brand col-lg-10 fs-4 px-6" href="#Menu">Menú</a>
          </li>
          <li className="navbar-text">
            <a className="navbar-brand col-lg-10 fs-4 px-6" href="#Reservaciones">Reservaciones</a>
          </li>
          <li className="navbar-text">
            <a className="navbar-brand col-lg-10 fs-4 px-6" href="#Contacto">Contacto</a>
          </li>
        </ul>
      </div>

    </header>

  );
}
