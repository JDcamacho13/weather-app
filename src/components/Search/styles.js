import styled, { css } from 'styled-components'

export const Icon = styled.span`
    & > svg {
        width: 50px;
        height: 50px;
        cursor: pointer;
    }
`

export const Button = styled.button`
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    outline: none;
    border: none;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    
    color: #fff;

    &:hover {
        border: 1px solid #fff;
    }
`

export const Container = styled.div`
  position: fixed;
  width: 0;
  height: 55px;
  top: 10px;
  left: 15px;
  display: flex;
  border-radius: 5px;
  padding: 10px;
  padding-left: 0;
  margin-bottom: 10px;
  background-color: transparent;
  color: #fff;
  z-index: 100;
  transition: all 0.3s;
  
  font-size: 13px;
  font-weight: 500;

  text-shadow: none;

  
    ${({ active }) => active && css`  
        width: 300px;  
        background-color: ${({ theme }) => theme.colors.cards_background};
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
    `}
`;