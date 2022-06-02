import { Indicator, Number, Unit } from "./styles"
import { useContext } from "react"
import { Context } from "../../context/WeatherContext"

export const Temperature = ({ temp, convertTemp }) => {
    const { unit } = useContext(Context)
    return (
        <Indicator>
            <Number>
                {convertTemp(temp)}
            </Number>
            <Unit>
                °{unit ? "F" : "C"}
            </Unit>
        </Indicator>
    )
}