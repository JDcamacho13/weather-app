import React from 'react'
import ReactDOM from 'react-dom/client'
import Context from './context/WeatherContext'
import App from './App'
import StyledGlobal from "./styles/StyledGlobal"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context.Provider>
      <StyledGlobal />
      <App />
    </Context.Provider>
  </React.StrictMode>
)
