import { useFilters } from '../hooks/useFilters.js'
import {Filters} from './Filters.jsx'

export function Header(){
    const {  setFilters } = useFilters()
    return(
        <header>
            <h1>Shopping Cart 🛒</h1>
            <Filters onChange={setFilters}/>
        </header>
    )
    
}