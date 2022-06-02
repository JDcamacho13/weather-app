import { PronosticItem } from '../PronosticItem'
import { List } from './styles'
import { useContext } from "react"
import { Context } from "../../context/WeatherContext"

export const PronosticList = ({ pronostic }) => {
    const { unit, convertTemp } = useContext(Context)
    return (
        <List>
            {pronostic.map((item, index) => (
                <PronosticItem key={index} date={item.date} id={item.icon} temperature={`${convertTemp(item.temp)}°${unit ? "F" : "C"}`} />
            ))}
        </List>
    )
}