import { Container, Stack, Title } from "@mantine/core"

import SearchForm from "../components/forms/SearchForm"

const Home = () => {
  return (
    <Container size="xs">
      <Stack>
        <Title>Hi! 👋</Title>
        <Title order={5} mb="xl">
          To begin, let&apos;s find some nice GitHub profile
        </Title>
        <SearchForm />
      </Stack>
    </Container>
  )
}

export default Home
