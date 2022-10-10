function NavBarCustom() {
  return (

    <div className="px-4 text-center">

      <img src={require("../images/logo2bw.png")} alt="Logo" width="350" height="350" />


      <ul className="nav justify-content-center">
        <li className="navbar-text">
          <a className="nav-link col-lg-10 fs-4 px-6" href="#Menu">Menú</a>
        </li>
        <li className="navbar-text">
          <a className="nav-link col-lg-10 fs-4 px-6" href="#Reservaciones">Reservaciones</a>
        </li>
        <li className="navbar-text">
          <a className="nav-link col-lg-10 fs-4 px-6" href="#Contacto">Contacto</a>
        </li>
      </ul>

    

    </div>

  );
}

export default NavBarCustom;