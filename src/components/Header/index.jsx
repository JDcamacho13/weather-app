import { HeaderStyled, Title } from "./styles"

export const Header = ({ country, city }) => {
    return (
        <HeaderStyled>
            <Title>
                {city}, {country}
            </Title>
        </HeaderStyled>
    )
}