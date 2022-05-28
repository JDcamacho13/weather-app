import { Container, NumberContainer, Number } from './styles'

export const HightlightsCard = ({ name, value, unit }) => {
    return (
        <Container>
            <span>{ name }</span>
            <NumberContainer>
                <Number>{ value }</Number>
                <span>{ unit }</span>
            </NumberContainer>
        </Container>
    )
}