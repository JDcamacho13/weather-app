import { PronosticItem } from '../PronosticItem'
import { List } from './styles'

export const PronosticList = ({ pronostic }) => {
    return (
        <List>
            {pronostic.map((item, index) => (
                <PronosticItem key={index} date={item.date} id={item.icon} temperature={`${item.temp}°c`} />
            ))}
        </List>
    )
}