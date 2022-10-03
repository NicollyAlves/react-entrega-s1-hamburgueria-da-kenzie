import logo from "../../assets/logo.svg"
import { Resultados } from "../Resultados/Resultados"
import { DivHeader, InputText, InputBtn } from "./styles.js"

export const Header = ({ setInput }) => {


    return (
        <DivHeader>
            <img src={logo} alt="Logo da Kenzie Burgueria" />

            <div>
                <form onSubmit={(e)=> {
                    e.preventDefault()
                    setInput(e.target.filter.value)}
                    }>
                    <InputText id="filter" type="text" placeholder="Digitar Pesquisa"/>
                    <InputBtn type="submit" value="Pesquisar" />
                    <div onChange={(e) => {setInput(e.target.filter.value)}}></div>
                </form>
            </div>
        </DivHeader>
    )
}