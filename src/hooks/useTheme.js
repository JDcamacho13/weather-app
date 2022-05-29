import { useState } from "react"
import * as themes from '../theme/schema.json' 

export const useTheme = () => {
    const [theme, setTheme] = useState(themes)

    return [theme, setTheme]
}