import { SimpleGrid, Text } from "@mantine/core"

import BackButton from "../buttons/BackButton"
import OrganizationCard from "../cards/OrganizationCard"

import { useUserData } from "../../hooks/useUserData"

const OrganizationsGrid = () => {
  const [userData] = useUserData()
  return (
    <>
      <BackButton my="sm" />
      {!userData?.orgs.length && <Text>You won&apos;t find them this way. Go back.</Text>}
      <SimpleGrid cols={4}>
        {userData?.orgs.map((org, i) => (
          <OrganizationCard key={i} org={org} />
        ))}
      </SimpleGrid>
    </>
  )
}

export default OrganizationsGrid
