import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Autocomplete } from "../Autocomplete";
import { Icon, Button, Container } from './styles'

export const Search = () => {
    const [toggleSearch, setToggleSearch] = useState(false);

    return (
        <div style={{ position: 'relative' }}>
            <Icon>
                <Button onClick={() => setToggleSearch(!toggleSearch)} color={'#fff'}>
                    <FaSearch />
                </Button>
            </Icon>
            <Container active={toggleSearch}>
                {toggleSearch &&
                    <>
                        <Icon>
                            <Button onClick={() => setToggleSearch(!toggleSearch)} color={'#000'}>
                                <FaSearch />
                            </Button>
                        </Icon>
                        <Autocomplete />
                    </>
                }
            </Container>
        </div>
    )
}