import styled from 'styled-components'

const size = {
    tablet: '768px',
    laptop: '1024px',
    desktop: '2560px'
}

export const device = {
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    desktop: `(min-width: ${size.desktop})`,
};

export const Container = styled.div`
    display: grid;
    grid-template-rows: 100vh min-content;
    gap: 32px;

    @media ${device.tablet} {
        grid-template-rows: 100vh;
        grid-template-columns: repeat(3, 1fr);
    }
`