import ReactDOM from 'react-dom'
import { Container, Spinner, Rect } from './styles';
import { Error } from '../Error';

export const Loading = ({ status, error }) => {
  return ReactDOM.createPortal(
    <Container status={status} error={error}>
      {
        error ?
          <Error error={error} /> :
          <Spinner>
            <Rect delay={0} />
            <Rect delay={1.1} />
            <Rect delay={1.0} />
            <Rect delay={0.9} />
            <Rect delay={0.8} />
          </Spinner>
      }
    </Container>,
    document.getElementById('loader')
  )
}
