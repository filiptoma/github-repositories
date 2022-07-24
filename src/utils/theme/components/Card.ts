import { MantineTheme } from "@mantine/core"

const Card = (theme: MantineTheme) => ({
  root: {
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
    border: theme.colorScheme === "dark" ? "none" : `1px solid ${theme.colors.gray[2]}`
  }
})

export default Card
