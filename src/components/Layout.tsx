import {
  AppShell,
  Center,
  Container,
  Header,
  Title,
  UnstyledButton,
  useMantineColorScheme
} from "@mantine/core"
import { Link } from "react-router-dom"
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
            <UnstyledButton component={Link} to="/">
              <Title>Github Repositories</Title>
            </UnstyledButton>
            <ToggleColorSchemeButton />
          </Container>
        </Header>
      }
    >
      <Container size="xs" my={86}>
        {children}
      </Container>
    </AppShell>
  )
}

export default Layout
