import { useEffect, useContext, useState } from 'react'
import { Context } from './context/WeatherContext'
import { Container } from './styles/styles'
import { Main } from './components/Main'
import { Aside } from './components/Aside'
import { Loading } from './components/Loading'
import { useTheme } from './hooks/useTheme'
import { ThemeProvider } from 'styled-components'
import StyledGlobal from "./styles/StyledGlobal"

function App() {
  const [loading, setLoading] = useState(true)
  const { weatherToday, weatherForecast, country, updateData } = useContext(Context)
  const [theme, setTheme] = useTheme()
  console.log(theme.default)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/weather`)
      const body = await response.json()
      updateData(body)
      setLoading(false)
    }

    fetchData()
  }, [])

  // console.log(weatherToday, weatherForecast, country)

  return (
    <>
      {loading ? <Loading /> :
        <ThemeProvider theme={theme.data.morning}>
          <StyledGlobal />
          <Container>
            <Main />
            <Aside />
          </Container>
        </ThemeProvider>
      }
    </>
  )
}

export default App
