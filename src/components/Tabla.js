
export const Tabla = ({infoTabla}) => {

    return(
        <table className="table">
                        <thead>
                            <tr className="table-light">
                                <th scope="colSpan" className="table-dark">Clave de Reservación</th>
                                <th scope="colSpan" className="table-dark">Fecha</th>
                                <th scope="colSpan" className="table-dark">Área</th>
                                <th scope="colSpan" className="table-dark">Personas</th>
                            </tr>
                        </thead>
                        <tbody>
                            {infoTabla.map(dato => (
                                <tr key={dato.id}>
                                    <th scope="row">{dato.id}</th>
                                    <td>{dato.fecha}</td>
                                    <td>{dato.area}</td>
                                    <td>{dato.personas}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
    )
}