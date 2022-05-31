import { useContext } from 'react'
import { Container, SunMoon } from './styles'
import { Header } from '../Header'
import { WeatherIcon } from '../WeatherIcon'
import { Temperature } from '../Temperature'
import { Description } from '../Description'
import { TodayDate } from '../TodayDate'
import { Context } from '../../context/WeatherContext'

export const Main = () => {
    const { weatherToday: {
        icon,
        weather,
        temp
    }, country, city } = useContext(Context)

    return (
        <Container>
            <SunMoon />
            <Header country={country} city={city} />
            <WeatherIcon id={icon} />
            <Temperature temp={temp} />
            <Description weather={weather} />
            <TodayDate />
        </Container>
    )
}