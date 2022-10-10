
import '../App.css'


const Menu = () => {

    return (
        <div className="container py-3">

            <h2 className="display-4 fw-bold lh-1 py-3 text-center" id="Menu">Menú</h2>

            <div className="row row-cols-2 row-cols-lg-4 align-items-stretch g-2 py-2">

                <div className="bg-image hover-overlay ripple shadow-1-strong rounded d-flex flex-column h-100 text-white text-shadow-1 content" data-mdb-ripple-color="light">
                    <div className="content-overlay"></div>
                    <img src={require("../images/tacocut.jpg")} className="h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg content-image" alt="..." />
                    <div className="mask text-light d-flex justify-content-center flex-column text-center content-details">
                        <h3 className="m-0">Tacos</h3>
                    </div>
                </div>

                <div className="bg-image hover-overlay ripple shadow-1-strong rounded d-flex flex-column h-100 text-white text-shadow-1 content" data-mdb-ripple-color="light">
                    <div className="content-overlay"></div>
                    <img src={require("../images/perchecut.jpg")} className="h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg content-image" alt="..." />
                    <div className="mask text-light d-flex justify-content-center flex-column text-center content-details">
                        <h3 className="m-0">Burros</h3>
                    </div>
                </div>

                <div className="bg-image hover-overlay ripple shadow-1-strong rounded d-flex flex-column h-100 text-white text-shadow-1 content" data-mdb-ripple-color="light">
                    <div className="content-overlay"></div>
                    <img src={require("../images/quesacut.jpg")} className="h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg content-image" alt="..." />
                    <div className="mask text-light d-flex justify-content-center flex-column text-center content-details">
                        <h3 className="m-0">Quesadillas</h3>
                    </div>
                </div>

                <div className="bg-image hover-overlay ripple shadow-1-strong rounded d-flex flex-column h-100 text-white text-shadow-1 content" data-mdb-ripple-color="light">
                    <div className="content-overlay"></div>
                    <img src={require("../images/cortescut.jpg")} className="h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg content-image" alt="..." />
                    <div className="mask text-light d-flex justify-content-center flex-column text-center content-details">
                        <h3 className="m-0">Cortes</h3>
                    </div>
                </div>
            </div>

            <div className="row row-cols-2 row-cols-lg-4 align-items-stretch g-2 py-2">

            <div className="bg-image hover-overlay ripple shadow-1-strong rounded d-flex flex-column h-100 text-white text-shadow-1 content" data-mdb-ripple-color="light">
                    <div className="content-overlay"></div>
                    <img src={require("../images/quesocut.jpg")}className="h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg content-image" alt="..." />
                    <div className="mask text-light d-flex justify-content-center flex-column text-center content-details">
                        <h3 className="m-0">Entradas</h3>
                    </div>
                </div>

                <div className="bg-image hover-overlay ripple shadow-1-strong rounded d-flex flex-column h-100 text-white text-shadow-1 content" data-mdb-ripple-color="light">
                    <div className="content-overlay"></div>
                    <img src={require("../images/bebidascut.jpg")} className="h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg content-image" alt="..." />
                    <div className="mask text-light d-flex justify-content-center flex-column text-center content-details">
                        <h3 className="m-0">Bebidas</h3>
                    </div>
                </div>

                <div className="bg-image hover-overlay ripple shadow-1-strong rounded d-flex flex-column h-100 text-white text-shadow-1 content" data-mdb-ripple-color="light">
                    <div className="content-overlay"></div>
                    <img src={require("../images/cervezacut.jpg")} className="h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg content-image" alt="..." />
                    <div className="mask text-light d-flex justify-content-center flex-column text-center content-details">
                        <h3 className="m-0">Cervezas</h3>
                    </div>
                </div>

                <div className="bg-image hover-overlay ripple shadow-1-strong rounded d-flex flex-column h-100 text-white text-shadow-1 content" data-mdb-ripple-color="light">
                    <div className="content-overlay"></div>
                    <img src={require("../images/coctelcut.jpg")} className="h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg content-image" alt="..." />
                    <div className="mask text-light d-flex justify-content-center flex-column text-center content-details">
                        <h3 className="m-0">Cocteles</h3>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Menu