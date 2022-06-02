import styled from 'styled-components'

export const Container = styled.div`
    justify-self: flex-end;
    white-space: nowrap;
`

export const Button = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
    width: 28px;
    height: 28px;
    color: white;
    font-weight: 700;
    border-radius: 50%;
    border: none;
    background-color: ${({ theme, active }) => active ? theme.colors.cards : 'transparent'};
    cursor: pointer;
    transition: all 0.25s ease;

    &:last-of-type {
        margin-right: 0;
    }

    &:hover {
        ${({ theme, active }) => !active && `
            transform: scale(1.1);
            background-color: ${theme.colors.cards};
        `}

    }
`