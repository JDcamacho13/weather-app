import styled from "styled-components";
import { device } from '../../styles/styles'

export const Heading = styled.header`
    width: 100%;
    display: grid;
    grid-template-columns: 76px 1fr 76px;

    color: white;
`

export const Location = styled.header`
    font-size: 24px;
    text-align: center;

    @media ${device.tablet} {
        font-size: 18px;
    }
`