import { Group, Stack, Text } from "@mantine/core"
import { useUserData } from "../hooks/useUserData"
import { LocationMarkerIcon, LinkIcon, UserIcon } from "@heroicons/react/outline"
import IconStat from "./IconStat"
import { formatISODate } from "../utils"

const GithubStats = () => {
  const [userData] = useUserData()
  const stats = [
    {
      data: userData?.user.followers,
      label: "Followers"
    },
    {
      data: userData?.user.following,
      label: "Following"
    },
    {
      data: userData?.user.public_repos,
      label: "Public Repos"
    },
    {
      data: userData?.user.public_gists,
      label: "Public Gists"
    }
  ]

  return (
    <>
      <Group position="center" spacing="xl" my="md">
        {stats.map((stat, i) => (
          <div key={i}>
            <Text size="lg" weight={600} align="center">
              {stat.data}
            </Text>
            <Text size="sm" align="center">
              {stat.label}
            </Text>
          </div>
        ))}
      </Group>
      <Stack spacing="xs">
        {userData?.user.location && (
          <IconStat Icon={LocationMarkerIcon} stat={userData?.user.location} />
        )}
        {userData?.user.blog && (
          <IconStat Icon={LinkIcon} stat={userData?.user.blog} url={userData.user.blog} />
        )}
        <IconStat Icon={UserIcon} stat={formatISODate(userData?.user.created_at ?? "")} />
      </Stack>
    </>
  )
}

export default GithubStats
