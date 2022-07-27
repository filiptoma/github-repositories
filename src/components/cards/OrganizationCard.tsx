import { Avatar, Card, Stack, Text, Title } from "@mantine/core"
import { TOrganization } from "../../utils/types"

type Props = {
  org: TOrganization
}

const OrganizationCard = ({ org }: Props) => {
  return (
    <Card component="a" href={`https://github.com/${org.login}`} target="_blank" radius="lg" p="md">
      <Stack align="center">
        <Avatar src={org.avatar_url} size={80} radius="xl" />
        <Title order={4}>{org.login}</Title>
      </Stack>
    </Card>
  )
}

export default OrganizationCard
