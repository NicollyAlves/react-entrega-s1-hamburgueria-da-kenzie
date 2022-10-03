import { Product } from '../Product/Product';
import { ProductsUl } from './styles';

    export const ProductsList = ({ handleClick, cart, setCart, filteredProducts, products }) => {

        return (
            <ProductsUl>
                {filteredProducts.map((product) => (
                    <Product key={product.id} product={product} handleClick={handleClick} cart={cart} setCart={setCart} />
                ))}
            </ProductsUl>
        )
    }
