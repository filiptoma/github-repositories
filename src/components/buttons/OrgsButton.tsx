import { Button, SharedButtonProps, useMantineTheme } from "@mantine/core"

const OrgsButton = (props: SharedButtonProps) => {
  const theme = useMantineTheme()
  return (
    <Button color={theme.primaryColor} variant="outline" radius="md" size="md" {...props}>
      Organisations
    </Button>
  )
}

export default OrgsButton
