import styled from 'styled-components'
import { device } from '../../styles/styles'

export const Icon = styled.div`
    place-self: center;
    width: 150px;
    height: 150px;

    @media ${device.laptop} {
        margin-top: 35px;
        width: 200px;
        height: 200px;
    }

    & > img {
        width: 100%;
        height: 100%;
        filter: drop-shadow(5px 5px 5px #555);
    }
`