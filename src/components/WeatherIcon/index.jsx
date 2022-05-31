import { Icon } from "./styles"

export const WeatherIcon = ({ id }) => {
    return (
        <Icon>
            <img width={250} src={`/images/${id}.png`} alt="weather icon" />
        </Icon>
    )
}