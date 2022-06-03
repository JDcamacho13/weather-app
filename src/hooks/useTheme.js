import { useState, useEffect, useContext } from "react"
import { data } from '../theme/schema.json'
import { Context } from "../context/WeatherContext"

const getTheme = (time, isDay) => {
    const hour = new Date(time).getHours()
    if (isDay) {
        if (hour > 17) return "evening"
        if (hour > 12) return "afternoon"
        return "morning"
    }
    return 'night'
}

export const useTheme = () => {
    const { time, isDay } = useContext(Context)
    const [theme, setTheme] = useState(data.morning)

    useEffect(() => {
        if (time) {
            const theme = getTheme(time, isDay)
            setTheme(data[theme])
        }
    }, [time])

    return [theme, setTheme]
}