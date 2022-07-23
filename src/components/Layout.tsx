import { AppShell, Center, Container, Header, Title, useMantineColorScheme } from "@mantine/core"
import ToggleColorSchemeButton from "./buttons/ToggleColorSchemeButton"

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  const { colorScheme } = useMantineColorScheme()
  const dark = colorScheme === "dark"
  return (
    <AppShell
      styles={(theme) => ({
        main: {
          background: dark ? theme.colors.dark[8] : theme.colors.gray[0]
        }
      })}
      fixed
      header={
        <Header height={70} p="md">
          <Container
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "100%"
            }}
          >
            <Title>Github Repositories</Title>
            <ToggleColorSchemeButton />
          </Container>
        </Header>
      }
    >
      <Container>{children}</Container>
    </AppShell>
  )
}

export default Layout
