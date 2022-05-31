import { useState, useEffect } from "react"
import * as themes from '../theme/schema.json' 

export const useTheme = () => {
    const [theme, setTheme] = useState(themes)

    useEffect(() => {
        const hour = new Date().getHours();

        if ( hour > 18 || hour < 6 ) {
            setTheme(themes.data.night)
        } else if ( hour > 17 ) {
            setTheme(themes.data.evening)
        } else if ( hour > 11 ) {
            setTheme(themes.data.afternoon)
        } else {
            setTheme(themes.data.morning)
        }

    }, [])

    return [theme, setTheme]
}