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

export const Icon = styled.div`
    place-self: center;
    width: 50px;
    height: 50px;

    & > img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`