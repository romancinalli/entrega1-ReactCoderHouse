import CartWitget from "../CartWitget/CartWitget";
import logo from '../../assets/logo.png'
import './Navbar.css'


function Navbar(){
    return(
        <nav className="navbar">
            <div className="logoContenedor">
                <h6 className="nombre">GRUPO VASCULAR</h6>
                <img className="logo" src={logo} alt="Logo" />
            </div>
            <ul className="lista">
                <li className="item"><a href="#">INICIO</a></li>
                <li className="item"><a href="#">PRODUCTOS</a></li>
                <li className="item"><a href="#">NOSOTROS</a></li>
                <li className="item"><a href="#">CONTACTO</a></li>
            </ul>
            <CartWitget className="carrito" numero="6"/>
        </nav>
    )
}

export default Navbar;