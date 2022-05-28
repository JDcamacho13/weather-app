import { Container, Spinner, Rect2, Rect3, Rect4, Rect5, Rect1 } from './styles';

export const Loading = () => {
  return (
    <Container>
      <Spinner>
        <Rect1 />
        <Rect2 />
        <Rect3 />
        <Rect4 />
        <Rect5 />
      </Spinner>
    </Container>
  )
}