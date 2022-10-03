import React from "react"
import { CartProducts } from "../CartProduct/CartProduct"
import { SectionVazio, TituloCart, AsideCart, DivVazio } from "./styles"
import { Total } from "../CartTotal/CartTotal"

export const CartAddRemove = ({ cart, setCart, cartTotal, removeProducts, products}) => {

    return (
        <AsideCart>
            <TituloCart>Carrinho de compras</TituloCart>
            <SectionVazio>
                    <h3>Sua sacola está vazia</h3>
                    <span>Adicione itens</span>
            </SectionVazio>
            <DivVazio>
                <CartProducts products={products} cart={cart} setCart={setCart} />
            </DivVazio>
                <Total cartTotal={cartTotal} cart={cart} removeProducts={removeProducts} />
        </AsideCart>
    )
}
