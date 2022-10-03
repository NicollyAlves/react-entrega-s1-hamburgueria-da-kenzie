import React from 'react';
import { UlProductsCart, DivContent } from './styles';

    export const CartProducts = ({ cart, setCart}) => {
        
        const handleRemove = (id) => {
            const array = cart.filter((product) => product.id !== id)
            setCart(array)
        }

        return (
            <UlProductsCart>
                {cart.map((product) => (
                <li key={product.id}>
                    <img src={product.img}></img>
                    <DivContent>
                    <div>
                        <h2>{product.name}</h2>
                        <span>{product.category}</span>
                    </div>
                    <button onClick={() => handleRemove(product.id)}>Remover</button>
                    </DivContent>
                </li>

                ))}
            </UlProductsCart>
        )
    }
