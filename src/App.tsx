import "@fontsource/poppins/400.css"
import "@fontsource/poppins/600.css"
import "@fontsource/poppins/700.css"
import "@fontsource/poppins/800.css"
import "@fontsource/poppins/900.css"
import { ColorScheme, ColorSchemeProvider, MantineProvider } from "@mantine/core"
import { NotificationsProvider } from "@mantine/notifications"
import { useState } from "react"

import "./App.css"

import Router from "./components/Router"
import Layout from "./components/Layout"
import { UserDataProvider } from "./hooks/useUserData"
import theme from "./utils/theme/theme"
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
