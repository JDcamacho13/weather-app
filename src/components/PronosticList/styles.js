import styled from 'styled-components'
import { device } from '../../styles/styles'

export const List = styled.ul`
    width: 100%;
    max-width: 100%;
    display: flex;
    gap: 16px;
    color: white;
    scroll-behavior: smooth;
    overflow-x: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }

    @media ${device.tablet} {
        grid-column: span 2;
    }
    
    @media ${device.laptop} {
        justify-content: center;
        grid-column: span 2;
    }
`