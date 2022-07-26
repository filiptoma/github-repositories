import { AppShell, Container, Header, Title, UnstyledButton, useMantineTheme } from "@mantine/core"
import { Link } from "react-router-dom"
import ToggleColorSchemeButton from "./buttons/ToggleColorSchemeButton"

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  const theme = useMantineTheme()
  const dark = theme.colorScheme === "dark"
  return (
    <AppShell
      fixed
      styles={{
        main: {
          backgroundColor: dark ? theme.colors.dark[7] : theme.colors.gray[0],
          color: dark ? theme.colors.dark[0] : theme.colors.gray[8]
        }
      }}
      header={
        <Header
          height={60}
          py={32}
          styles={{
            root: {
              backgroundColor: dark ? theme.colors.dark[6] : theme.white,
              borderBottom: dark ? "none" : `1px solid ${theme.colors.gray[2]}`
            }
          }}
        >
          <Container
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "100%"
            }}
          >
            <UnstyledButton component={Link} to="/">
              <Title order={2}>Github Repositories</Title>
            </UnstyledButton>
            <ToggleColorSchemeButton />
          </Container>
        </Header>
      }
    >
      <Container size="md" my={60}>
        {children}
      </Container>
    </AppShell>
  )
}

export default Layout
