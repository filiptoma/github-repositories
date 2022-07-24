import { Button, SharedButtonProps, useMantineTheme } from "@mantine/core"
import { Link } from "react-router-dom"

const ReposButton = (props: SharedButtonProps) => {
  const theme = useMantineTheme()
  return (
    <Button
      component={Link}
      to="./repos"
      color={theme.primaryColor}
      radius="md"
      size="md"
      {...props}
    >
      Repositories
    </Button>
  )
}

export default ReposButton
