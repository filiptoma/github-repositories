import "@fontsource/poppins/400.css" // Weight: normal
import "@fontsource/poppins/600.css" // Weight: semibold
import "@fontsource/poppins/700.css" // Weight: bold
import { ColorScheme, ColorSchemeProvider, MantineProvider } from "@mantine/core"

import "./App.css"

import theme from "./utils/theme"
import Router from "./components/Router"
import Layout from "./components/Layout"
import GlobalStyles from "./components/GlobalStyles"
import { useState } from "react"
import { UserDataProvider } from "./hooks/useUserData"

const App = () => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("dark")
  const toggleColorScheme = (value?: ColorScheme) => {
    setColorScheme(value || colorScheme === "dark" ? "light" : "dark")
    theme.colorScheme = colorScheme === "dark" ? "light" : "dark"
  }

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={theme} withNormalizeCSS>
        <UserDataProvider>
          <GlobalStyles />
          <Layout>
            <Router />
          </Layout>
        </UserDataProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default App
