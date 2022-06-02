import { useEffect, useContext, useState } from 'react'
import { Context } from './context/WeatherContext'
import { Container } from './styles/styles'
import { Main } from './components/Main'
import { Aside } from './components/Aside'
import { Loading } from './components/Loading'
import { Error } from './components/Error'
import { useTheme } from './hooks/useTheme'
import { ThemeProvider } from 'styled-components'
import StyledGlobal from "./styles/StyledGlobal"
import useGetLocation from './hooks/useGetLocation'

const geolocationOptions = {
  enableHighAccuracy: false,
  timeout: 1000 * 60 * 1,
  maximumAge: 1000 * 3600 * 24
}

function App() {
  const { location, error } = useGetLocation(geolocationOptions)
  const [loading, setLoading] = useState(true)
  const { updateData } = useContext(Context)
  const [theme] = useTheme()

  useEffect(() => {
    if (location !== undefined) {
      const fetchData = async () => {
        const response = await fetch(`/api/weather?latitude=${location.latitude}&longitude=${location.longitude}`)
        const body = await response.json()
        console.log(body)
        updateData(body)
        setLoading(false)
      }
      fetchData()
    }
  }, [location])

  return (
    <>
      <Loading status={loading} error={error} />
      {
        !loading && location &&
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
