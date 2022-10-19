import { info, obtenerReservacion } from '../firebase/logic'



//console.log(info)
const valor = info

const Tabla = () => {

    console.log(valor)

    const mapa = valor.map(dato => (
        <tr>
            <th scope="row">{dato.id}</th>
            <td>{dato.fecha}</td>
            <td>{dato.area}</td>
            <td>{dato.personas}</td>
        </tr>
    ))

   
    console.log(mapa)

    return (
        <div className="container-fluid py-5" >
            <div className="container px-4 py-3">
                <table className="table">
                    <thead>
                        <tr className="table-light">
                            <th scope="colSpan" className="table-dark">No. de Reservación</th>
                            <th scope="colSpan" className="table-dark">Fecha</th>
                            <th scope="colSpan" className="table-dark">Área</th>
                            <th scope="colSpan" className="table-dark">Personas</th>
                        </tr>
                    </thead>
                    <tbody>
                            {mapa}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Tabla;