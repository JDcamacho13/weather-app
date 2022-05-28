import { Container } from './styles/styles' 
import { Main } from './components/Main'
import { Aside } from './components/Aside'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // this way we can call the api
    const fetchData = async () => {
      const response = await fetch(`/api/weather`)
      const body = await response.json()
      console.log(body)
    }

    fetchData()
  }, [])

  return (
    <Container>
      <Main />
      <Aside />
    </Container>
  )
}

export default App
