import styled, { css } from 'styled-components'

export const Container = styled.div`
    position: relative;
`

export const Button = styled.button`
    position: absolute;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    outline: none;
    border: none;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    transition: all 0.25s ease;
    cursor: pointer;
    z-index: 110;

    &:hover {
        background-color: ${({ theme }) => theme.colors.cards};
    }
`

export const List = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 4px 0px 4px 0px;
    width: 0;
    min-height: 35px;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    font-size: 13px;
    font-weight: 500;
    text-shadow: none;
    transition: all 0.25s ease;
    z-index: 100;
    
    ${({ active }) => active && css`  
        width: 250px;
        background-color: ${({ theme }) => {
            const color = theme.colors.cards;
            return color.slice(0, -2)
        }};
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
    `}
`;