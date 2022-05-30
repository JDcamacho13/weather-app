import styled from 'styled-components'
import { device } from '../../styles/styles'

export const Indicator = styled.div`
    display: flex;
    align-items: center;
`

export const Number = styled.span`
    font-size: 72px;

    @media ${device.laptop} {
        font-size: 92px;
        font-weight: 500;
    }
`

export const Unit = styled.span`
    font-size: 32px;
    font-weight: 300;

    @media ${device.laptop} {
        font-size: 46px;
    }
`