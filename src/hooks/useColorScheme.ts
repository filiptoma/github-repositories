import { ColorScheme } from "@mantine/core"
import { useState } from "react"

import theme from "../utils/theme/theme"

const useColorScheme = () => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("dark")

  const toggleColorScheme = (value?: ColorScheme) => {
    setColorScheme(value || colorScheme === "dark" ? "light" : "dark")
    theme.colorScheme = colorScheme === "dark" ? "light" : "dark"
  }

  return { colorScheme, toggleColorScheme }
}

export default useColorScheme
