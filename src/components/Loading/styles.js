import styled from 'styled-components'
import { keyframes } from 'styled-components'

const animation = keyframes`
  0%, 40%, 100% { 
    transform: scaleY(0.4); 
  }
  20% { 
    transform: scaleY(1.0) 
  }
`

export const Container = styled.div`
  display: grid;
  place-content: center;
  height: 100vh;
`

export const Spinner = styled.div`
  margin: -100px auto;
  width: 100px;
  height: 80px;
  text-align: center;
  font-size: 10px;

  & > div {
    background-color: #fff;
    margin: 0 2px;
    height: 100%;
    width: 6px;
    display: inline-block;
  }
`
export const Rect1 = styled.div`
  animation: ${animation} 1.2s infinite ease-in-out;
`

export const Rect2 = styled.div`
  animation: ${animation} 1.2s infinite ease-in-out;
  animation-delay: -1.1s;
`

export const Rect3 = styled.div`
  animation: ${animation} 1.2s infinite ease-in-out;
  animation-delay: -1.0s;
`

export const Rect4 = styled.div`
  animation: ${animation} 1.2s infinite ease-in-out;
  animation-delay: -0.9s;
`
export const Rect5 = styled.div`
  animation: ${animation} 1.2s infinite ease-in-out;
  animation-delay: -0.8s;
`