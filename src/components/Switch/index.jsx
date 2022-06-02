import { useState, useContext } from 'react'
import { Context } from '../../context/WeatherContext'
import { Container, Button } from './styles'

export const Switch = () => {
    const { unit, setUnit } = useContext(Context)

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