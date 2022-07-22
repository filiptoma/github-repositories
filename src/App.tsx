import "@fontsource/poppins/400.css" // Weight: normal
import "@fontsource/poppins/600.css" // Weight: semibold
import "@fontsource/poppins/700.css" // Weight: bold
import { ColorScheme, ColorSchemeProvider, MantineProvider, Text } from "@mantine/core"
import { useLocalStorage } from "@mantine/hooks"

import "./App.css"

import theme from "./utils/theme"

const App = () => {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "color-scheme",
    defaultValue: "dark",
    getInitialValueInEffect: true
  })
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || colorScheme === "dark" ? "light" : "dark")

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider withGlobalStyles theme={theme}>
        <Text>Hello, Mantine!</Text>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default App
