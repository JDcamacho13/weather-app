import { Container } from './styles'
import { Header } from '../Header'
import { WeatherIcon } from '../WeatherIcon'
import { Temperature } from '../Temperature'
import { Description } from '../Description'
import { Date } from '../Date'

export const Main = () => {
    return (
        <Container>
            <Header />
            <WeatherIcon />
            <Temperature />
            <Description />
            <Date />
        </Container>
    )
}