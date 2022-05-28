import { PronosticItem } from '../PronosticItem'
import { List } from './styles'

export const PronosticList = () => {
    return (
        <List>
            <PronosticItem date='Mañana' iconType='☀' temperature='32°c' />
            <PronosticItem date='Viernes' iconType='🌩' temperature='32°c' />
            <PronosticItem date='Sabado' iconType='🌨' temperature='32°c' />
            <PronosticItem date='Domingo' iconType='🌥' temperature='32°c' />
            <PronosticItem date='Lunes' iconType='🌪' temperature='32°c' />
        </List>
    )
}