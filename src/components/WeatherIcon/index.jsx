import { Icon } from "./styles"

export const WeatherIcon = ({ id }) => {
    return (
        <Icon>
            <img width={250} src={`https://openweathermap.org/img/wn/${id}@4x.png`} alt="weather icon" />
        </Icon>
    )
}