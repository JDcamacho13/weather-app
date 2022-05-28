import { useEffect, useContext, useState } from 'react'
import { Context } from './context/WeatherContext'
import { Container } from './styles/styles'
import { Main } from './components/Main'
import { Aside } from './components/Aside'
import { Loading } from './components/Loading'

function App() {
  const [loading, setLoading] = useState(true)
  const { weatherToday, weatherForecast, country, updateData } = useContext(Context)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/weather`)
      const body = await response.json()
      updateData(body)
      setLoading(false)
    }

    fetchData()
  }, [])

  console.log(weatherToday, weatherForecast, country)

  return (
    <>
      {loading ? <Loading /> :
        <Container>
          <Main />
          <Aside />
        </Container>
      }
    </>
  )
}

export default App
