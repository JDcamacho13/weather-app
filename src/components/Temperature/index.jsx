import { Indicator, Number, Unit } from "./styles"

export const Temperature = () => {
    return (
        <Indicator>
            <Number>
                16  
            </Number>
            <Unit>
                °C
            </Unit>
        </Indicator>
    )
}