import Humberger from './../assets/icons/humberger.svg'
import Cart from './../assets/icons/cart.svg'

export default function Icon({name, width, height, alt}) {
    switch(name){
        case 'humberger':
            return <img src={Humberger} width={width} height={height} alt={alt} />
        case 'cart':
            return <img src={Cart} width={width} height={height} alt={alt} />
        default:
            return <div>No icon found</div>
    }
}
