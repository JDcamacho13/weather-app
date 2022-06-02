import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Autocomplete } from "../Autocomplete";
import { Button, Container, List } from './styles'

export const Search = () => {
    const [toggleSearch, setToggleSearch] = useState(false);

    return (
        <Container>
            <Button onClick={() => setToggleSearch(!toggleSearch)}>
                <FaSearch size={20} />
            </Button>
            <List active={toggleSearch}>
                {
                    toggleSearch &&
                    <Autocomplete setToggleSearch={setToggleSearch} />
                }
            </List>
        </Container>
    )
}

{/* <Container>
<Icon>
    <Button onClick={() => setToggleSearch(!toggleSearch)} color={'#fff'}>
        <FaSearch />
    </Button>
</Icon>
<List active={toggleSearch}>
    {toggleSearch &&
        <>
            <Icon>
                <Button onClick={() => setToggleSearch(!toggleSearch)}>
                    <FaSearch size={20} />
                </Button>
            </Icon>
            <Container active={toggleSearch}>
                {toggleSearch &&
                    <>
                        <Icon>
                            <Button onClick={() => setToggleSearch(!toggleSearch)}>
                                <FaSearch size={20} />
                            </Button>
                        </Icon>
                        <Autocomplete />
                    </>
                }
            </Container>
        </div>
    )
            */}
