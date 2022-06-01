import { Search } from '../Search'
import { Switch } from '../Switch'
import { Heading, Location } from "./styles"

export const Header = ({ country, city }) => {
    return (
        <Heading>
            <Search />
            <Location>
                {city}, {country}
            </Location>
            <Switch />
        </Heading>
    )
}