import { HeaderStyled, Title } from "./styles"

export const Header = ({ country }) => {
    return (
        <HeaderStyled>
            <Title>
                {country}
            </Title>
        </HeaderStyled>
    )
}