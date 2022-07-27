import { Button, Stack, Title, useMantineTheme } from "@mantine/core"
import { Link } from "react-router-dom"

const Error404 = () => {
  const theme = useMantineTheme()
  return (
    <Stack align="center">
      <Title>👀 Page not found.</Title>
      <Button component={Link} to="/" color={theme.primaryColor} radius="md" size="md">
        HOME
      </Button>
    </Stack>
  )
}

export default Error404
