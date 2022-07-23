import "@fontsource/poppins/400.css" // Weight: normal
import "@fontsource/poppins/600.css" // Weight: semibold
import "@fontsource/poppins/700.css" // Weight: bold
import { ColorScheme, ColorSchemeProvider, MantineProvider } from "@mantine/core"
import { useLocalStorage } from "@mantine/hooks"

import "./App.css"

import theme from "./utils/theme"
import Router from "./components/Router"
import Layout from "./components/Layout"
import GlobalStyles from "./components/GlobalStyles"

const App = () => {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "color-scheme",
    defaultValue: "dark",
    getInitialValueInEffect: true
  })
  const toggleColorScheme = (value?: ColorScheme) => {
    setColorScheme(value || colorScheme === "dark" ? "light" : "dark")
    theme.colorScheme = theme.colorScheme === "dark" ? "light" : "dark"
  }

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={theme} withNormalizeCSS>
        <GlobalStyles />
        <Layout>
          <Router />
        </Layout>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default App
