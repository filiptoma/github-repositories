import { Global } from "@mantine/core"

const GlobalStyles = () => {
  return (
    <Global
      styles={(theme) => ({
        body: {
          backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
          color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[9]
        }
      })}
    />
  )
}

export default GlobalStyles
