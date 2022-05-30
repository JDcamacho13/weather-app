import { Container, Spinner, Rect } from './styles';

export const Loading = () => {
  return (
    <Container>
      <Spinner>
        <Rect delay={0} />
        <Rect delay={1.1} />
        <Rect delay={1.0} />
        <Rect delay={0.9} />
        <Rect delay={0.8} />
      </Spinner>
    </Container>
  )
}