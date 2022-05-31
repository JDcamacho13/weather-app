import { useEffect, useState } from 'react'
import { Item, Icon } from './styles'

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
    const [day, setDay] = useState('')

    useEffect(() => {
        const weekDay = new Date(date).getDay()
        setDay(days[weekDay])
    }, [])

    return (
        <Item>
            <span>{day}</span>
            <Icon><img src={`/images/${id}.png`} alt="weather icon" /></Icon>
            <span>{temperature}</span>
        </Item>
    )
}