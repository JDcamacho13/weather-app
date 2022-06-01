import { Container, NumberContainer, Number, ProgressBar, BarContainer } from './styles'

export const HightlightsCard = ({ name, value, unit, image, barProgress = false }) => {
    return (
        <Container>
            <span>{name}</span>
            <NumberContainer>
                <img src={`/images/${image}.png`} />
                <div>
                    <Number>{value}</Number>
                    <span>{unit}</span>
                </div>
            </NumberContainer>
            {barProgress &&
                <BarContainer>
                    <ProgressBar value={value} max="100" />
                </BarContainer>
            }
        </Container>
    )
}