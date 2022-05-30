import { Container, NumberContainer, Number, ProgressBar, BarContainer } from './styles'

export const HightlightsCard = ({ name, value, unit, barProgress = false }) => {
    return (
        <Container>
            <span>{name}</span>
            <NumberContainer>
                <Number>{value}</Number>
                <span>{unit}</span>
            </NumberContainer>
            {barProgress &&
                <BarContainer>
                    <ProgressBar value={value} max="100" />
                </BarContainer>
            }
        </Container>
    )
}