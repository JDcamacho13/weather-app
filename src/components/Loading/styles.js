import styled, { keyframes, css } from 'styled-components'

const grow = keyframes`
  0%, 40%, 100% { 
    transform: scaleY(0.4); 
  }
  20% { 
    transform: scaleY(1.0) 
  }
`

const disappear = keyframes`
  0% { 
    opacity: 1;
    z-index: 100;
  }
  100% { 
    opacity: 0;
    z-index: -1;
  }
`

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: grid;
  place-content: center;
  place-items: center;
  height: 100vh;
  width: 100vw;
  background-color: white;
  animation: ${({ status, error }) => (!status && error === undefined) ? css`${disappear} 1.2s ease forwards` : ''};
  z-index: 100;

  & > img{
    width: 120px;
  }
`

export const Spinner = styled.div`
  width: 100px;
  height: 80px;
  text-align: center;
  font-size: 10px;

  & > div {
    background-color: #023e8a;
    margin: 0 2px;
    height: 100%;
    width: 6px;
    display: inline-block;
  }
`
export const Rect = styled.div`
  animation: ${grow} 1.2s infinite ease-in-out;
  animation-delay: ${({ delay }) => '-' + delay + 's'};
`