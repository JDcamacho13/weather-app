import styled from 'styled-components'
import { device } from '../../styles/styles'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 8px;
    border-radius: 6px;
    background-color: #114da0;
    text-align: center;
    color: white;

    /* @media ${device.tablet} {
        width: 225px;
        place-self: center;
    } */
`

export const NumberContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Number = styled.span`
    font-size: 42px;
    font-weight: 500;

    @media ${device.tablet} {
        font-size: 54px;
    }
`