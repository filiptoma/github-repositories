import { SunIcon, MoonIcon } from "@heroicons/react/outline"
import {
  Center,
  Group,
  Text,
  UnstyledButton,
  useMantineColorScheme,
  useMantineTheme
} from "@mantine/core"
import { upperFirst } from "@mantine/hooks"

const ToggleColorSchemeButton = () => {
  const theme = useMantineTheme()
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const dark = colorScheme === "dark"
  const Icon = dark ? SunIcon : MoonIcon

  return (
    <Group position="center" my="xl">
      <UnstyledButton
        aria-label="Toggle color mode"
        onClick={() => toggleColorScheme()}
        title="Toggle color mode"
        style={{
          backgroundColor: dark ? theme.colors.dark[8] : theme.colors.gray[1],
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderRadius: 100,
          width: 90,
          height: 36
        }}
        pl="sm"
        pr={4}
      >
        <Text
          size="sm"
          style={{
            lineHeight: 1,
            color: dark ? theme.colors.dark[0] : theme.black
          }}
        >
          {upperFirst(dark ? "light" : "dark")}
        </Text>
        <Center
          style={{
            height: 28,
            width: 28,
            borderRadius: 100,
            backgroundColor: dark ? theme.colors.yellow[4] : theme.colors.dark[4],
            color: dark ? theme.black : theme.colors.blue[2]
          }}
        >
          <Icon width={18} height={18} />
        </Center>
      </UnstyledButton>
    </Group>
  )
}

export default ToggleColorSchemeButton
