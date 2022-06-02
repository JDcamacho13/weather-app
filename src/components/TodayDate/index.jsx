import { useEffect, useState, useContext } from "react"
import { Context } from "../../context/WeatherContext"

const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
const days = ['Domingo', 'Lunes', 'martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']

export const TodayDate = () => {
    const [today, setToday] = useState({})
    const { time } = useContext(Context)

    useEffect(() => {
        const todayDate = new Date(time);
        const hourDate = todayDate.getHours();
        const minutes = todayDate.getMinutes();
        const suffix = hourDate >= 12 ? 'PM' : 'AM';

        setToday({
            day: todayDate.getDay(),
            date: todayDate.getDate(),
            month: todayDate.getMonth(),
            hour: hourDate > 12 ? hourDate - 12 : hourDate,
            minutes,
            suffix
        })
    }, [time])

    return (
        <div>Hoy, {days[today.day] + " " + today.date + " de " + months[today.month] + " " + today.hour + ":" + today.minutes + " " + today.suffix}</div>
    )
}