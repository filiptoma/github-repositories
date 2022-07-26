import { Button, SharedButtonProps, useMantineTheme } from "@mantine/core"
import { Link } from "react-router-dom"

const OrgsButton = (props: SharedButtonProps) => {
  const theme = useMantineTheme()
  return (
    <Button
      component={Link}
      to="./orgs"
      color={theme.primaryColor}
      variant="outline"
      radius="md"
      size="md"
      {...props}
    >
      Organisations
    </Button>
  )
}

export default OrgsButton
