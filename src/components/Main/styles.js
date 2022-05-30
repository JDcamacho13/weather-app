import styled from 'styled-components'
import { device } from '../../styles/styles'

export const SunMoon = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.images.sunMoon.position.top};
  left: ${({ theme }) => theme.images.sunMoon.position.left};;
  background-image: ${({ theme }) => `url('/images/${theme.images.sunMoon.name}.png')`};
  background-size: contain;
  background-position: center;
  width: 200px;
  height: 200px;
  z-index: -1;
`

export const Container = styled.div`
    position: relative;
    display: grid;
    grid-template-rows: min-content 1fr;
    grid-auto-rows: min-content;
    gap: 16px;
    justify-items: center;
    padding: 16px;
    color: white;
    background-image: ${({ theme }) => `url('/images/${theme.images.montains}.png')`};
    background-size: 768px;
    background-repeat: no-repeat;
    background-position: bottom;

    @media ${device.tablet} {
      background-image: none;
    }
`
