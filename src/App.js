import './App.css';
import { obtenerReservacion } from './firebase/logic'
import NavBarCustom from './components/Navbar';
import Blog from './components/Blog';
import Menu from './components/Menu';
import Reservaciones from './components/Reservaciones';
import Tabla from './components/Tabla';
import Contacto from './components/Contacto';

function App() {

  return (
    <>
      <NavBarCustom />
      <Blog />
      <Menu />
      <Reservaciones />
      <Tabla />
      <Contacto />
    </>
  )
}

export default App;
