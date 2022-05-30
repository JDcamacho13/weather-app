import styled from 'styled-components'
import { device } from '../../styles/styles'

export const Item = styled.li`
    font-size: 16px;
    min-width: 100px;
    flex: 1 1;
    display: flex;
    flex-direction: column;
    padding: 8px;
    list-style: none;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.colors.cards};
    text-align: center;
`

export const Icon = styled.span`
    font-size: 48px;
`