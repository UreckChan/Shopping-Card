import { useCart } from '../hooks/useCart'
import { useFilters } from '../hooks/useFilters'
import './Footer.css'

export function Footer () {
    const {filters} = useFilters()
    const { cart } = useCart()
    return(
        <footer className="footer">
  
            <h4>Prueba técnica de React ⚛️ - <span>@Ugomez</span></h4>
            <h5>Shopping Cart con useContext & useReduce</h5>
       
        </footer>
    )
}
