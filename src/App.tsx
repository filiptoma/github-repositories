import "@fontsource/poppins/400.css" // Weight: normal
import "@fontsource/poppins/600.css" // Weight: semibold
import "@fontsource/poppins/700.css" // Weight: bold
import "@fontsource/poppins/800.css"
import "@fontsource/poppins/900.css" // Weight: black
import { ColorScheme, ColorSchemeProvider, MantineProvider } from "@mantine/core"
import { NotificationsProvider } from "@mantine/notifications"

import "./App.css"

import theme from "./utils/theme/theme"
import Router from "./components/Router"
import Layout from "./components/Layout"
import { useState } from "react"
import { UserDataProvider } from "./hooks/useUserData"
import styles from "./utils/theme/styles"

const App = () => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("dark")
  const toggleColorScheme = (value?: ColorScheme) => {
    setColorScheme(value || colorScheme === "dark" ? "light" : "dark")
    theme.colorScheme = colorScheme === "dark" ? "light" : "dark"
  }

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider withNormalizeCSS theme={theme} styles={styles}>
        <NotificationsProvider>
          <UserDataProvider>
            <Layout>
              <Router />
            </Layout>
          </UserDataProvider>
        </NotificationsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default App
