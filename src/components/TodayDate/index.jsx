import { useEffect, useState } from "react"

const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
const days =  ['Domingo', 'Lunes', 'martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']

export const TodayDate = () => {
    const [ today, setToday ] = useState({})

    useEffect(() => {
        const todayDate = new Date();
        setToday({
            day: todayDate.getDay(), 
            date: todayDate.getDate(),
            month: todayDate.getMonth()
        })
    }, [])

    return (
        <div>Hoy, { days[today.day] + " " + today.date + " de " + months[today.month] }</div>
    )
}