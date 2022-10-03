import { ProductsLi, DivImg, DivContent } from "./styles.js";

export const Product = ({ product, cart, setCart }) => {    
    const {id, img, name, category, price} = product

    const handleClick = (product) => {
        if(cart.indexOf(product) !== -1) return
            console.log(product);
            setCart([...cart, product])
    }


    return (
            <ProductsLi key={id}>
                <DivImg>
                    <img src={img}></img>
                </DivImg>
                <DivContent>
                    <h2>{name}</h2>
                    <span>{category}</span>
                    <p>R${price}</p>
                    <button onClick={() => handleClick(product)}>Adicionar</button>
                </DivContent>
            </ProductsLi>
    )
}
