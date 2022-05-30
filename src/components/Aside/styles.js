import styled from 'styled-components'
import { device } from '../../styles/styles'

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: min-content min-content;
    gap: 16px;
    overflow-x: hidden;
    padding: 16px;
    background-color: ${({ theme }) => theme.colors.aside};

    @media ${device.tablet} {
        grid-column: span 2;
        background-color: transparent;
    }

    @media ${device.laptop} {
        padding: 42px;
        gap: 42px;
    }
`
export const Title = styled.h2`
    margin-top: 16px;
    grid-column: span 2;
    color: white;
    font-weight: 500;
    text-align: center;
`