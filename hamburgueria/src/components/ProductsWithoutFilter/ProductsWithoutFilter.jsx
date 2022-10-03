import { Product } from "../Product/Product"

    export const ProductsWithoutFilter = ({ handleClick, cart, setCart, products }) => {

        return (
            <ul>
                {products.map((product) => (
                    <Product key={product.id} product={product} handleClick={handleClick} cart={cart} setCart={setCart} />
                ))}
            </ul>
        )
    }