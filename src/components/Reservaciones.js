const Reservaciones = () => {

    return (
        <div className="container-fluid py-5">

            <h2 className="display-4 fw-bold lh-1 py-3 text-center" id="Reservaciones">Reservaciones</h2>
            <div className="container px-4 py-3">
                <form>
                    <div className="row py-3 gx-4">

                        <div className="col-md-5 py-1">
                            <label htmlFor="inputNombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="inputNombre" />
                        </div>

                        <div className="col-md-4 py-1">
                            <label htmlFor="inputEmail" className="form-label">E-mail</label>
                            <input type="email" className="form-control" id="inputEmail" />
                        </div>

                        <div className="col-md-3 py-1">
                            <label htmlFor="inputCel" className="form-label">Teléfono</label>
                            <input type="tel" className="form-control" id="inputCel" />
                        </div>
                    </div>

                    <div className="row py-3 gx-4">

                        <div className="col-md-5 py-1">
                            <label htmlFor="inputFecha" className="form-label">Fecha</label>
                            <input type="datetime-local" className="form-control" id="inputFecha" />
                        </div>

                        <div className="col-md-4 py-1">
                            <label htmlFor="inputZona" className="form-label">Zona</label>
                            <select className="form-select" id="inputZona">
                                <option defaultValue>Favor de elegir zona...</option>
                                <option>Terraza</option>
                                <option>Jardin</option>
                                <option>Interior</option>
                            </select>
                        </div>

                        <div className="col-md-3 py-1">
                            <label htmlFor="inputPersonas" className="form-label">Personas</label>
                            <input type="number" className="form-control" id="inputPersonas" />
                        </div>
                    </div>

                    <div className="col-12 py-3">
                        <button type="submit" className="btn btn-dark">¡Reservar!</button>
                    </div>

                </form>
            </div>

        </div>
    )
}

export default Reservaciones