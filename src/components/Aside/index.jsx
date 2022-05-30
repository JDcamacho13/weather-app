import { useContext } from "react"
import { Container, Title } from "./styles"
import { PronosticList } from "../PronosticList"
import { HightlightsCard } from "../HightlightsCard"
import { Context } from "../../context/WeatherContext"

export const Aside = () => {
    const { weatherForecast, weatherToday } = useContext(Context)
    const { humidity, wind, visibility, pressure } = weatherToday

    console.log(weatherForecast)

    return (
        <Container>
            <PronosticList pronostic={weatherForecast} />
            <Title>Destacados de hoy</Title>
            <HightlightsCard name='Viento' value={wind.speed} unit='mph' />
            <HightlightsCard name='Humedad' value={humidity} unit='%' barProgress={true} />
            <HightlightsCard name='Visibilidad' value={visibility} unit='miles' />
            <HightlightsCard name='Presion de aire' value={pressure} unit='mb' />
        </Container>
    )
}