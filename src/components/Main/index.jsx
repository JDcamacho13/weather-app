import { useContext } from 'react'
import { Container, SunMoon } from './styles'
import { Header } from '../Header'
import { WeatherIcon } from '../WeatherIcon'
import { Temperature } from '../Temperature'
import { Description } from '../Description'
import { Date } from '../Date'
import { Context } from '../../context/WeatherContext'

export const Main = () => {
    const { weatherToday: {
        weather,
        temp
    }, country } = useContext(Context)

    return (
        <Container>
            <SunMoon />
            <Header country={country} />
            <WeatherIcon />
            <Temperature temp={temp} />
            <Description weather={weather} />
            <Date />
        </Container>
    )
}