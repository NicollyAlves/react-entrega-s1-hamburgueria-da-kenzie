import logo from "../../assets/logo.svg"
import { Resultados } from "../Resultados/Resultados"
import { DivHeader, InputText, InputBtn } from "./styles.js"

export const Header = ({ setInput, input, products, setFilteredProducts }) => {

    const filtroPesquisa = (valueInput, products) => {
        setFilteredProducts(products.filter((item) => {
            if(!valueInput) {
                return item
        }
            return item.name.toLowerCase().includes(valueInput.toLowerCase())
        }))
    }

    return (
        <DivHeader>
            <img src={logo} alt="Logo da Kenzie Burgueria" />

            <div>
                <form onSubmit={(e)=> {
                    e.preventDefault()
                    setInput(e.target.filter.value)
                    filtroPesquisa(input, products)}
                    }>
                    <InputText id="filter" type="text" placeholder="Digitar Pesquisa"/>
                    <InputBtn type="submit" value="Pesquisar" />
                </form>
            </div>
        </DivHeader>
    )
}