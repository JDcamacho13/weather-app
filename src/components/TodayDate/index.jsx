import { useEffect, useState, useContext } from "react"
import { Context } from "../../context/WeatherContext"

const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
const days = ['Domingo', 'Lunes', 'martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']

export const TodayDate = () => {
    const [today, setToday] = useState({})
    const { time } = useContext(Context)

    useEffect(() => {
        const todayDate = new Date(time);
        setToday({
            day: todayDate.getDay(),
            date: todayDate.getDate(),
            month: todayDate.getMonth(),
            hour: todayDate.getHours() > 12 ? ("PM " + (todayDate.getHours() - 12)) : "AM" + todayDate.getHours(),
            minutes: todayDate.getMinutes()
        })
    }, [])

    return (
        <div>Hoy, {days[today.day] + " " + today.date + " de " + months[today.month] + " " + today.hour + ":" + today.minutes}</div>
    )
}