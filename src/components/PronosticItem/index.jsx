import { Item, Icon } from './styles'

export const PronosticItem = ({ date, id, temperature }) => {
    return (
        <Item>
            <span>{date}</span>
            <Icon><img src={`https://openweathermap.org/img/wn/${id}.png`} alt="weather icon" /></Icon>
            <span>{temperature}</span>
        </Item>
    )
}