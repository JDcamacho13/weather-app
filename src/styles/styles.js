import styled, { keyframes } from 'styled-components'

const size = {
  tablet: '768px',
  laptop: '1024px',
  desktop: '2560px'
}

const moveLeftDesktop = keyframes`
  0% { 
    background-position: 0;
  }
  100% { 
    background-position: -3000px;
  }
`

const moveLeftMobile = keyframes`
  0% { 
    background-position: 0;
  }
  100% { 
    background-position: -768px;
  }
`

export const device = {
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    desktop: `(min-width: ${size.desktop})`,
};

export const Container = styled.div`
    position: relative;
    display: grid;
    grid-template-rows: 100vh min-content;
    background-image: ${({ theme }) => `url('/images/${theme.images.montains}.png')`};
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom;

    &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: ${({ theme }) => `url('/images/${theme.images.sky.mobile}.png')`};
        background-size: contain;
        background-position: center;
        top: 0;
        animation: ${moveLeftMobile} 200s infinite linear;
        z-index: -1;

        @media ${device.tablet} {
          background-image: ${({ theme }) => `url('/images/${theme.images.sky.desktop}.png')`};
          animation: ${moveLeftDesktop} 400s infinite linear;
        }
    }

    &:after {
      ${({ theme }) => 
        theme.images.skyFixed && `
          content: '';
          position: fixed;
          width: 100%;
          height: 100%;
          background-size: contain;
          background-repeat: no-repeat;
          background-position: bottom;
          top: 0;
          z-index: -1;
          background-image: url("/images/${theme.images.skyFixed}.png")};
        `
      }
    }

    @media ${device.tablet} {
        grid-template-rows: 100vh;
        grid-template-columns: repeat(3, 1fr);
        gap: 32px;
    }
`