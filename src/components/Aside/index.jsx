import { Container, Title } from "./styles"
import { PronosticList } from "../PronosticList"
import { HightlightsCard } from "../HightlightsCard"

export const Aside = () => {
    return (
        <Container>
            <PronosticList />
            <Title>Destacados de hoy</Title>
            <HightlightsCard name='Viento'  value='7'  unit='mph' />
            <HightlightsCard name='Humedad'  value='84'  unit='%' />
            <HightlightsCard name='Visibilidad'  value='6,4'  unit='miles' />
            <HightlightsCard name='Presion de aire'  value='998'  unit='mb' />
        </Container>
    )
}