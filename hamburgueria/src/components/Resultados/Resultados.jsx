import { DivResultados, DivInput, DivText } from "./styles"


export const Resultados = ({ input }) => {
    if(input) {
        return(
            <DivResultados>
                <DivText>
                    Resultados para: 
                </DivText>
                <DivInput>
                    {input}
                </DivInput>
            </DivResultados>
        )
    }
}