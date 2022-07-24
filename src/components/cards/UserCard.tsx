import {
  Avatar,
  Card,
  CloseButton,
  Grid,
  Group,
  Indicator,
  Stack,
  Text,
  Title,
  useMantineTheme
} from "@mantine/core"
import { useUserData } from "../../hooks/useUserData"
import BackButton from "../buttons/BackButton"
import OrgsButton from "../buttons/OrgsButton"
import ReposButton from "../buttons/ReposButton"
import GithubStats from "../GithubStats"

const UserCard = () => {
  const theme = useMantineTheme()
  const [userData] = useUserData()
  return (
    <Card radius="lg" p="lg">
      <BackButton />
      <Stack align="center" spacing="lg">
        {userData?.user.type === "Organization" ? (
          <Indicator
            label="ORG"
            color={theme.primaryColor}
            size={24}
            offset={7}
            withBorder
            style={{ fontWeight: "bold" }}
          >
            <Avatar src={userData?.user.avatar_url} size={160} radius="xl" />
          </Indicator>
        ) : (
          <Avatar src={userData?.user.avatar_url} size={160} radius="xl" />
        )}
        <Stack align="center" spacing="xs">
          {userData?.user.name ? (
            <Group align="end">
              <Title order={3}>{userData?.user.name}</Title>
              <Text>({userData?.user.login})</Text>
            </Group>
          ) : (
            <Title order={3}>{userData?.user.login}</Title>
          )}
          <Text size="sm" color="dimmed" align="center">
            {userData?.user.bio}
          </Text>
        </Stack>
        <GithubStats />
      </Stack>
      <Group grow mt={40}>
        {userData?.orgs.length && <OrgsButton />}
        <ReposButton />
      </Group>
    </Card>
  )
}

export default UserCard
