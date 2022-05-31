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
  const { updateData } = useContext(Context)
  const [ theme ] = useTheme()

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/weather`)
      const body = await response.json()
      updateData(body)
      setLoading(false)
    }

    fetchData()
  }, [])

  return (
    <>
      <Loading status={loading} />
      {
        !loading && 
          <ThemeProvider theme={theme}>
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
