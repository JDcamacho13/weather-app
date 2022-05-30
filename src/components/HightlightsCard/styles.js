import styled from 'styled-components'
import { device } from '../../styles/styles'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 8px;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.colors.cards};
    text-align: center;
    color: white;
`

export const NumberContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media ${device.laptop} {
        font-size: 24px;
    }
`

export const Number = styled.span`
    font-size: 42px;
    font-weight: 500;

    @media ${device.tablet} {
        font-size: 54px;
    }

    @media ${device.desktop} {
        font-size: 68px;
    }
`