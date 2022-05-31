import { Search } from '../Search'
import { Switch } from '../Switch'
import { Heading, Location } from "./styles"

export const Header = ({ country }) => {
    return (
        <Heading>
            <Search />
            <Location>
                { country }
            </Location>
            <Switch />
        </Heading>
    )
}