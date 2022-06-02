import styled, { css } from 'styled-components'

export const Icon = styled.span`

    & > svg {
        width: 25px;
        height: 25px;
        cursor: pointer;
    }
`

export const Button = styled.button`
    cursor: pointer;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    outline: none;
    border: none;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    
    color: ${({ color }) => color};

    &:hover {
        border: 1px solid #000;
    }
`

export const Container = styled.div`
  position: fixed;
  width: 0;
  height: 45px;
  top: 10px;
  left: 15px;
  display: flex;
  border-radius: 5px;
  padding: 10px;
  padding-left: 0;
  margin-bottom: 10px;
  background-color: transparent;
  color: #000;
  z-index: 100;
  transition: all 0.3s;
  
  font-size: 13px;
  font-weight: 500;

  text-shadow: none;

  
    ${({ active }) => active && css`  
        width: 200px;  
        background-color: #fff;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
    `}
`;