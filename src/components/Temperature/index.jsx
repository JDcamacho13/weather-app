import { Indicator, Number, Unit } from "./styles"

export const Temperature = ({ temp }) => {
    return (
        <Indicator>
            <Number>
                {temp}
            </Number>
            <Unit>
                °C
            </Unit>
        </Indicator>
    )
}