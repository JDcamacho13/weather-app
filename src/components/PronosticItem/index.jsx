import { useEffect, useState, useContext } from 'react'
import { Item, Icon, Temperature } from './styles'
import { FaThermometerHalf } from "react-icons/fa";
import { Context } from '../../context/WeatherContext'

const days = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
]

export const PronosticItem = ({ date, id, temperature }) => {
    const { time, isDay } = useContext(Context)
    const [day, setDay] = useState('')
    const [icon, setIcon] = useState('')

    useEffect(() => {
        const datetime = new Date(date)
        const today = new Date(time)
        if (datetime.getDate() == today.getDate()) {
            setDay('Más tarde')
        } else if (datetime.getDate() == today.getDate() + 1) {
            setDay('Mañana')
        } else {
            const weekDay = new Date(date).getDay()
            setDay(days[weekDay])
        }

        const icon = id.substring(0, id.length - 1)

        if (isDay) {
            setIcon(icon + "d")
        } else {
            setIcon(icon + "n")
        }

    }, [time])

    return (
        <Item>
            <span>{day}</span>
            <Icon><img src={`/images/${icon}.png`} alt="weather icon" /></Icon>
            <Temperature>
                <FaThermometerHalf />
                {temperature}
            </Temperature>
        </Item>
    )
}