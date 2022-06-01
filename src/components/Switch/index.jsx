import { useState } from 'react'
import { Container, Button } from './styles'

export const Switch = () => {
    const [ unit, setUnit ] = useState(false)
    
    const handleOnClick = () => {
        setUnit(!unit)
    }

    return (
        <Container>
            <Button onClick={handleOnClick} active={!unit}>C°</Button> 
            |
            <Button onClick={handleOnClick} active={unit}>F°</Button> 
        </Container>
    )
}