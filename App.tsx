import { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components/native'
import { Auth } from './src/screens/Auth/View'
import { Home } from './src/screens/Home/View'
import light from './src/theme/light'
import dark from './src/theme/dark'

export default function App() {
  const [authorized, setAuthorized] = useState<boolean>(false)

  const Render = (): JSX.Element => {
    if (authorized) {
      return <Home />
    }
    return <Auth />
  }

  return (
    <ThemeProvider theme={light}>
      <Render />
    </ThemeProvider>
  )
}