import { ProductsList } from "../ProductsList/ProductsList";
import { ProductsWithoutFilter } from "../ProductsWithoutFilter/ProductsWithoutFilter";
import { Button } from "./styles";

export const BtnNullFilter = ({products, setFilteredProducts }) => {

    const todos = (e, products, setFilteredProducts) => {
        e.preventDefault()
        console.log(products);
        setFilteredProducts(products)

    }

    return (
        <Button onClick={(e) => {todos(e, products, setFilteredProducts)}} >Limpar busca</Button>
    )
}