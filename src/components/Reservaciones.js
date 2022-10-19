import { useState } from 'react'
import { agregarReservacion, obtenerReservacion } from '../firebase/logic'

const Reservaciones = () => {

    const [reservacion, setReservacion] = useState({
        nombre: "",
        email: "",
        telefono: "",
        fecha: "",
        area: "",
        personas: "",
    })

    const [first, setFirst] = useState(false);

    const handleClick = () => {
        setFirst(!first);
        setTimeout(() => {
            setFirst(!!first);
        }, 2000);
    };

    const handleInputValor = (event) => {
        setReservacion({
            ...reservacion,
            [event.target.name]: event.target.value,
        })
    }


    const enviarReservacion = (event) => {
        event.preventDefault()
        agregarReservacion(reservacion)
        obtenerReservacion()
    }

    return (
        <div className="container-fluid py-5">

            <h2 className="display-4 fw-bold lh-1 py-3 text-center" id="Reservaciones">Reservaciones</h2>
            <div className="container px-4 py-3">
                <form onSubmit={enviarReservacion}>
                    <div className="row py-3 gx-4">

                        <div className="col-md-5 py-1">
                            <label htmlFor="inputNombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="inputNombre" name="nombre" onChange={handleInputValor} />
                        </div>

                        <div className="col-md-4 py-1">
                            <label htmlFor="inputEmail" className="form-label">E-mail</label>
                            <input type="email" className="form-control" id="inputEmail" name="email" onChange={handleInputValor} />
                        </div>

                        <div className="col-md-3 py-1">
                            <label htmlFor="inputTelefono" className="form-label">Teléfono</label>
                            <input type="tel" className="form-control" id="inputTelefono" name="telefono" onChange={handleInputValor} />
                        </div>
                    </div>

                    <div className="row py-3 gx-4">

                        <div className="col-md-5 py-1">
                            <label htmlFor="inputFecha" className="form-label">Fecha</label>
                            <input type="datetime-local" className="form-control" id="inputFecha" name="fecha" onChange={handleInputValor} />
                        </div>

                        <div className="col-md-4 py-1">
                            <label htmlFor="inputArea" className="form-label">Área</label>
                            <select className="form-select" id="inputArea" name="area" onChange={handleInputValor}>
                                <option defaultValue>Favor de elegir área...</option>
                                <option>Terraza</option>
                                <option>Jardín</option>
                                <option>Interior</option>
                            </select>
                        </div>

                        <div className="col-md-3 py-1">
                            <label htmlFor="inputPersonas" className="form-label">Personas</label>
                            <input type="number" className="form-control" id="inputPersonas" name="personas" onChange={handleInputValor} />
                        </div>
                    </div>

                    <div className="col-12 py-3">
                        <button type="submit" className='btn btn-dark' onClick={handleClick}>¡Reservar!</button>
                        <br/>
                        <div className={`mt-3 alert alert-dark ${first ? '' : 'd-none'}`}>¡Su reservación ha sido guardada!</div>
                    </div>

                </form>
            </div>

        </div>
    )
}

export default Reservaciones