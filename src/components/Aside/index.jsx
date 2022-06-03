import { useContext } from "react"
import { Container, Title } from "./styles"
import { PronosticList } from "../PronosticList"
import { HightlightsCard } from "../HightlightsCard"
import { Context } from "../../context/WeatherContext"

export const Aside = () => {
    const { weatherForecast, weatherToday } = useContext(Context)
    const { humidity, wind, visibility, pressure } = weatherToday

    return (
        <Container>
            <PronosticList pronostic={weatherForecast} />
            <Title>Destacados de hoy</Title>
            <HightlightsCard name='Viento' value={wind} unit='Km/h' image='wind' />
            <HightlightsCard name='Humedad' value={humidity} unit='%' barProgress={true} image='humedity' />
            <HightlightsCard name='Visibilidad' value={visibility} unit="Km" image='visibility' />
            <HightlightsCard name='Presion de aire' value={pressure} unit='mb' image='pressure' />
        </Container>
    )
}