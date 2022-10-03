import { DivTotal, DivText } from "./styles"

export const Total = ({ cartTotal, removeProducts }) => {
    return (
        cartTotal > 0 && (
        <DivTotal>
            <DivText>
                <div>
                    Total:
                </div>
                <p>
                    R${cartTotal}
                </p>
            </DivText>

            <button onClick={() => removeProducts()} >Remover todos</button>
        </DivTotal>
        )
    )
}

export default Total