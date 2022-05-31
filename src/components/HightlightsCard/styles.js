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

export const ProgressBar = styled.progress`
    appearance: none;
    width: 100%;
    height: 12px;
    
    margin-top: 8px;
    
    &::-webkit-progress-bar {
        background-color: transparent;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
    }

    &::-webkit-progress-value {
        border-radius: 8px;
        background-color: ${({ theme }) => theme.colors.progressBar};
    }
`

export const BarContainer = styled.div`
    margin: 0 auto;
    display: flex;
    align-items: center;
    width: 100%;
    
    @media ${device.tablet} {
        max-width: 250px;
    }
`

export const Number = styled.span`
    font-size: 32px;
    font-weight: 500;

    @media ${device.tablet} {
        font-size: 54px;
    }

    @media ${device.desktop} {
        font-size: 68px;
    }
`