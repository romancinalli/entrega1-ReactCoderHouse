import carrito from '../../assets/carrito.png'
import './CartWitget.css'

function CartWitget({numero}){
    return(
        <div className='carritoContenedor'>
            <img className="carrito" src={carrito} alt="carrito" />
            <span className='badge'>{numero}</span>
        </div>
    )
}

export default CartWitget;