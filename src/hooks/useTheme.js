import { useState, useEffect, useContext } from "react"
import * as themes from '../theme/schema.json'
import { Context } from "../context/WeatherContext"

export const useTheme = () => {
    const { time } = useContext(Context)
    const [theme, setTheme] = useState(themes.data.morning)

    useEffect(() => {
        if (time.length > 0) {
            const hour = new Date(time.replace('Z', '')).getHours();

            console.log(time.replace('Z', ''))

            if (hour > 18 || hour < 6) {
                setTheme(themes.data.night)
            } else if (hour > 17) {
                setTheme(themes.data.evening)
            } else if (hour > 11) {
                setTheme(themes.data.afternoon)
            } else {
                setTheme(themes.data.morning)
            }
        }
    }, [time])

    return [theme, setTheme]
}