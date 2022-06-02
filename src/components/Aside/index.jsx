import { useContext, useEffect, useState } from "react"
import { Container, Title } from "./styles"
import { PronosticList } from "../PronosticList"
import { HightlightsCard } from "../HightlightsCard"
import { Context } from "../../context/WeatherContext"

export const Aside = () => {
    const { weatherForecast, weatherToday } = useContext(Context)
    const { humidity, wind, visibility, pressure } = weatherToday
    const [visibilityValue, setVisibilityValue] = useState([visibility, "m"])

    useEffect(() => {
        if (visibilityValue[0] >= 1000) {
            setVisibilityValue([visibility / 1000, "Km"])
        }
    }, [visibility])

    return (
        <Container>
            <PronosticList pronostic={weatherForecast} />
            <Title>Destacados de hoy</Title>
            <HightlightsCard name='Viento' value={wind.speed} unit='kph' image='wind' />
            <HightlightsCard name='Humedad' value={humidity} unit='%' barProgress={true} image='humedity' />
            <HightlightsCard name='Visibilidad' value={visibilityValue[0]} unit={visibilityValue[1]} image='visibility' />
            <HightlightsCard name='Presion de aire' value={pressure} unit='mb' image='pressure' />
        </Container>
    )
}