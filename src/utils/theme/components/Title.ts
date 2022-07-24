import { MantineTheme } from "@mantine/core"

const Title = (theme: MantineTheme) => ({
  root: {
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[9]
  }
})

export default Title
