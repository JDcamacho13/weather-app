import React from 'react'
import ReactDOM from 'react-dom/client'
import Context from './context/WeatherContext'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context.Provider>
      <App />
    </Context.Provider>
  </React.StrictMode>
)
