import { ProductsList } from "../ProductsList/ProductsList";
import { ProductsWithoutFilter } from "../ProductsWithoutFilter/ProductsWithoutFilter";

export const BtnNullFilter = ({ handleClick, cart, setCart, products }) => {
    /*const todos = ({handleClick, cart, setCart, products}) => {
        return (
            <div>
                <ProductsWithoutFilter handleClick={handleClick} cart={cart} setCart={setCart} products={products} />
            </div>
        )
    }*/

    const todos = () => {
        return(
            <div>
                <ProductsWithoutFilter handleClick={handleClick} cart={cart} setCart={setCart} products={products} />
            </div>
        )
    }

    return (
        <button onClick={() => {todos()}} >Apagar filtro</button>
    )
}