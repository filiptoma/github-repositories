import "@fontsource/poppins/400.css"
import "@fontsource/poppins/600.css"
import "@fontsource/poppins/700.css"
import "@fontsource/poppins/800.css"
import "@fontsource/poppins/900.css"
import { ColorSchemeProvider, MantineProvider } from "@mantine/core"
import { NotificationsProvider } from "@mantine/notifications"

import "./App.css"

import Router from "./components/Router"
import Layout from "./components/Layout"
import useColorScheme from "./hooks/useColorScheme"
import { UserDataProvider } from "./hooks/useUserData"
import theme from "./utils/theme/theme"
import styles from "./utils/theme/styles"

const App = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme()
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
