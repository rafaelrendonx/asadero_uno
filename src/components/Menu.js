
import '../App.css'


const Menu = () => {

    const tacos = [
        {
            plato : 'Taco de Asada',
            descripcion: 'Taco de carne asada de diezmillo.',
        },
        {
            plato : 'Taco Caramelo',
            descripcion: 'Taco con queso y carne a elección.',
        },
        {
            plato : 'Taco Campechano',
            descripcion: 'Taco de asada y tripitas.',
        },
        {
            plato : 'Taco Pastor',
            descripcion: 'Taco de carne al pastor.',
        },
        {
            plato : 'Taco Gringa',
            descripcion: 'Taco de carne al pastor con queso.',
        },
        {
            plato : 'Taco Light',
            descripcion: 'Taco en hoja de lechuga con carne a elección.',
        },
        {
            plato : 'Taco Cabrería',
            descripcion: 'Taco de cabrería.',
        },
        {
            plato : 'Taco Tripitas',
            descripcion: 'Taco de tripitas.',
        },
    ]

    const burros = [
        {
            plato : 'Burro Original',
            descripcion: 'Carne de res, guacamole, tomate y queso.',
        },
        {
            plato : 'Burro Mexicano',
            descripcion: 'Original, cebolla asada y chile verde..',
        },
        {
            plato : 'Burro Cheese',
            descripcion: 'Original, combinación de quesos.',
        },
        {
            plato : 'Burro Adobado',
            descripcion: 'Adobada, tomate, guacamole y queso.',
        },
        {
            plato : 'Burro Italiano',
            descripcion: 'Original, champiñones, jamón, pepperoni y salsa italiana.',
        },
    ]

    const quesadillas = [
        {
            plato : 'Quesadilla con Carne',
            descripcion: 'Hecha con tortilla gordita. Con guacamole.',
        },
        {
            plato : 'Vegetariana',
            descripcion: 'Guacamole, tomate, queso, champiñones, chile verde, cebolla asada, queso y salsa italiana.',
        },
        {
            plato : 'Especial',
            descripcion: 'Res, guacamole, tomate, queso, cebolla asada, chile verde, champiñones, salsa italiana, extra queso, jamón y pepperoni. Cuadrada con tortilla sobaguera, hecha con tortilla gordita.',
        },
    ]

    const cortes = [
        {
            plato : 'Costilla Cargada',
            descripcion: 'Pieza completa de costilla, horneada por largo tiempo y servida en su propio jugo, acompañada de papas sazonadas.',
        },
        {
            plato : 'Ribeye Steak',
            descripcion: 'Corte asado al punto sobre plancha caliente acompañado de papas cambray.',
        },
        {
            plato : 'Arrachera',
            descripcion: 'Asada al punto con papas sazonadas, cebolla y chiles toreados. Acompañada de salsa especial de la casa.',
        },
        {
            plato : 'Lomo de cabrería',
            descripcion: 'Pieza de filete con hueso asado al gusto, acompañado con papas cambray y salsa especial de la casa.',
        },
        {
            plato : 'Tomahawk',
            descripcion: 'Único corte de Rib Eye con hueso, asado al término deseado y servido sobre tabla de mezquite.',
        },
    ]

    const entradas = [
        {
            plato : 'Papada de Puerco',
            descripcion: 'Deliciosa papada asada.',
        },
        {
            plato : 'Chicharrones de Rib',
            descripcion: 'Deliciosos trozos de carne adobados en salsas negras acompañados de cebolla y chile serrano.',
        },
        {
            plato : 'Pork Belly',
            descripcion: 'Porción de faldón de puerco horneado a fuego lento en salsa de manzana, servido en trozos.',
        },
        {
            plato : 'Queso Fundido',
            descripcion: 'Con un ingrediente a escoger chile verde, chorizo, chipotle y ostión.',
        },
        {
            plato : 'Panela en Ajonjolí',
            descripcion: 'Panela empanizada con semillas de ajonjolí, servida y bañada con salsa dulce, acompañada de rodajas de chile caribe.',
        },
    ]
    
    const bebidas = [
        {
            plato : 'Horchata',
            descripcion: 'Agua de horchata de la casa.',
        },
        {
            plato : 'Jamaica',
            descripcion: 'Agua de jamaica de la casa.',
        },
        {
            plato : 'Cebada',
            descripcion: 'Agua de cebada de la casa.',
        },
        {
            plato : 'Tepache',
            descripcion: 'Rico fermenado de piña.',
        },
        {
            plato : 'Refrescos',
            descripcion: 'Bebidas carbonatadas de distintos sabores.',
        },
    ]

    const cervezas = [
        {
            plato : 'Tecate',
            descripcion: 'Cerveza tipo Pilsen. Es de un color dorado y un contenido alcohólico de 4.7°.',
        },
        {
            plato : 'Indio',
            descripcion: 'Cerveza obscura estilo Lager Vienna creada de la fusión de dos ingredientes, la malta dorada y caramelo tostado. Contenido alcohólico de 4.1°.',
        },
        {
            plato : 'Amstel Ultra',
            descripcion: 'Cerveza tipo lager. Contenido alcohólico de 4°.',
        },
        {
            plato : 'Modelo Especial',
            descripcion: 'Cerveza pilsner americana. Contenido alcohólico de 4.5°.',
        },
        {
            plato : 'Negra Modelo',
            descripcion: 'Cerveza tipo Múnich fermentada dos veces más que otras cervezas. Contenido alcohólico de 5.3°.',
        },
    ]

    const cocteles = [
        {
            plato : 'Old Fashioned',
            descripcion: 'Bulleit Bourbon, angostura bitters & azúcar.',
        },
        {
            plato : 'Negroni',
            descripcion: 'Ginebra, Campari & Vermouth Rosso.',
        },
        {
            plato : 'Moscow Mule',
            descripcion: 'Vodka Ketel One, hierbabuena, limón & ginger.',
        },
        {
            plato : 'Dry Martini',
            descripcion: 'Tanqueray, cinzano dry, perfume y twist de limón amarillo.',
        },
        {
            plato : 'Whisky Sour',
            descripcion: 'Bulleit Bourbon, angostura, aquafaba, bitters sweet & sour.',
        },
    ]

    return (
        <div className="container py-3">

            <h2 className="display-4 fw-bold lh-1 py-3 text-center" id="Menu">Menú</h2>

            <div className="row row-cols-2 row-cols-lg-4 align-items-stretch g-2 py-2">

                <div className="bg-image hover-overlay ripple shadow-1-strong rounded d-flex flex-column h-100 text-white text-shadow-1 content" data-mdb-ripple-color="light">
                    <div className="content-overlay"></div>
                    <img src={require("../images/tacocut.jpg")} className="h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg content-image" alt="..." />
                    <div className="mask text-light d-flex justify-content-center flex-column text-center content-details">
                        <h3 className="m-0" data-bs-toggle="modal" data-bs-target="#modalTacos">Tacos</h3>
                    </div>
                </div>

                <div className="bg-image hover-overlay ripple shadow-1-strong rounded d-flex flex-column h-100 text-white text-shadow-1 content" data-mdb-ripple-color="light">
                    <div className="content-overlay"></div>
                    <img src={require("../images/perchecut.jpg")} className="h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg content-image" alt="..." />
                    <div className="mask text-light d-flex justify-content-center flex-column text-center content-details">
                        <h3 className="m-0" data-bs-toggle="modal" data-bs-target="#modalBurros">Burros</h3>
                    </div>
                </div>

                <div className="bg-image hover-overlay ripple shadow-1-strong rounded d-flex flex-column h-100 text-white text-shadow-1 content" data-mdb-ripple-color="light">
                    <div className="content-overlay"></div>
                    <img src={require("../images/quesacut.jpg")} className="h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg content-image" alt="..." />
                    <div className="mask text-light d-flex justify-content-center flex-column text-center content-details">
                        <h3 className="m-0" data-bs-toggle="modal" data-bs-target="#modalQuesadillas">Quesadillas</h3>
                    </div>
                </div>

                <div className="bg-image hover-overlay ripple shadow-1-strong rounded d-flex flex-column h-100 text-white text-shadow-1 content" data-mdb-ripple-color="light">
                    <div className="content-overlay"></div>
                    <img src={require("../images/cortescut.jpg")} className="h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg content-image" alt="..." />
                    <div className="mask text-light d-flex justify-content-center flex-column text-center content-details">
                        <h3 className="m-0" data-bs-toggle="modal" data-bs-target="#modalCortes">Cortes</h3>
                    </div>
                </div>
            </div>

            <div className="row row-cols-2 row-cols-lg-4 align-items-stretch g-2 py-2">

                <div className="bg-image hover-overlay ripple shadow-1-strong rounded d-flex flex-column h-100 text-white text-shadow-1 content" data-mdb-ripple-color="light">
                    <div className="content-overlay"></div>
                    <img src={require("../images/quesocut.jpg")} className="h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg content-image" alt="..." />
                    <div className="mask text-light d-flex justify-content-center flex-column text-center content-details">
                        <h3 className="m-0" data-bs-toggle="modal" data-bs-target="#modalEntradas">Entradas</h3>
                    </div>
                </div>

                <div className="bg-image hover-overlay ripple shadow-1-strong rounded d-flex flex-column h-100 text-white text-shadow-1 content" data-mdb-ripple-color="light">
                    <div className="content-overlay"></div>
                    <img src={require("../images/bebidascut.jpg")} className="h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg content-image" alt="..." />
                    <div className="mask text-light d-flex justify-content-center flex-column text-center content-details">
                        <h3 className="m-0" data-bs-toggle="modal" data-bs-target="#modalBebidas">Bebidas</h3>
                    </div>
                </div>

                <div className="bg-image hover-overlay ripple shadow-1-strong rounded d-flex flex-column h-100 text-white text-shadow-1 content" data-mdb-ripple-color="light">
                    <div className="content-overlay"></div>
                    <img src={require("../images/cervezacut.jpg")} className="h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg content-image" alt="..." />
                    <div className="mask text-light d-flex justify-content-center flex-column text-center content-details">
                        <h3 className="m-0" data-bs-toggle="modal" data-bs-target="#modalCervezas">Cervezas</h3>
                    </div>
                </div>

                <div className="bg-image hover-overlay ripple shadow-1-strong rounded d-flex flex-column h-100 text-white text-shadow-1 content" data-mdb-ripple-color="light">
                    <div className="content-overlay"></div>
                    <img src={require("../images/coctelcut.jpg")} className="h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg content-image" alt="..." />
                    <div className="mask text-light d-flex justify-content-center flex-column text-center content-details">
                        <h3 className="m-0" data-bs-toggle="modal" data-bs-target="#modalCocteles">Cocteles</h3>
                    </div>
                </div>

            </div>


            <div className="modal fade" id="modalTacos" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content panel-warning">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Tacos</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {tacos.map(plato => (
                                <>
                                <h4 key= {plato.id}>{plato.plato}</h4>
                                <p key= {plato.id}>{plato.descripcion}</p>
                                </>
                            ))}
                            <p></p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="modalBurros" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Burros</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {burros.map(plato => (
                                <>
                                <h4 key= {plato.id}>{plato.plato}</h4>
                                <p key= {plato.id}>{plato.descripcion}</p>
                                </>
                            ))}
                            <p></p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="modal fade" id="modalQuesadillas" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Quesadillas</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {quesadillas.map(plato => (
                                <>
                                <h4 key= {plato.id}>{plato.plato}</h4>
                                <p key= {plato.id}>{plato.descripcion}</p>
                                </>
                            ))}
                            <p></p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="modal fade" id="modalCortes" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Cortes</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {cortes.map(plato => (
                                <>
                                <h4 key= {plato.id}>{plato.plato}</h4>
                                <p key= {plato.id}>{plato.descripcion}</p>
                                </>
                            ))}
                            <p></p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="modalEntradas" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Entradas</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {entradas.map(plato => (
                                <>
                                <h4 key= {plato.id}>{plato.plato}</h4>
                                <p key= {plato.id}>{plato.descripcion}</p>
                                </>
                            ))}
                            <p></p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="modalBebidas" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Bebidas</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {bebidas.map(plato => (
                                <>
                                <h4 key= {plato.id}>{plato.plato}</h4>
                                <p key= {plato.id}>{plato.descripcion}</p>
                                </>
                            ))}
                            <p></p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="modalCervezas" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Cervezas</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {cervezas.map(plato => (
                                <>
                                <h4 key= {plato.id}>{plato.plato}</h4>
                                <p key= {plato.id}>{plato.descripcion}</p>
                                </>
                            ))}
                            <p></p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="modalCocteles" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Cocteles</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {cocteles.map(plato => (
                                <>
                                <h4 key= {plato.id}>{plato.plato}</h4>
                                <p key= {plato.id}>{plato.descripcion}</p>
                                </>
                            ))}
                            <p></p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    )
}

export default Menu