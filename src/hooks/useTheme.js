import { useState, useEffect, useContext } from "react"
import * as themes from '../theme/schema.json'
import { Context } from "../context/WeatherContext"

export const useTheme = () => {
    const { time } = useContext(Context)
    const [theme, setTheme] = useState(themes)

    useEffect(() => {
        const hour = new Date(time).getHours();

        if (hour > 18 || hour < 6) {
            setTheme(themes.data.night)
        } else if (hour > 17) {
            setTheme(themes.data.evening)
        } else if (hour > 11) {
            setTheme(themes.data.afternoon)
        } else {
            setTheme(themes.data.morning)
        }

    }, [time])

    return [theme, setTheme]
}