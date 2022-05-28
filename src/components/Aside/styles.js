import styled from 'styled-components'
import { device } from '../../styles/styles'

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: min-content min-content;
    gap: 16px;
    overflow-x: hidden;
    padding: 16px;

    @media ${device.tablet} {
        grid-column: span 2;
    }
`
export const Title = styled.h2`
    margin-top: 32px;
    grid-column: span 2;
    color: white;
    font-weight: 500;
    text-align: center;
`