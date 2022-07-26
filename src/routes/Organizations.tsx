import { Container } from "@mantine/core"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import OrganizationsGrid from "../components/grids/OrganizationsGrid"
import Spinner from "../components/Spinner"
import { useUserData } from "../hooks/useUserData"
import useUserSearch from "../hooks/useUserSearch"

const Organizations = () => {
  const { userId } = useParams()
  const [isLoading, setLoading] = useState<boolean>(false)
  const fetchUser = useUserSearch(setLoading)
  const [userData] = useUserData()

  useEffect(() => {
    if (!userId || userData?.user.login === userId) {
      return
    }
    fetchUser(userId)
  }, [])

  return (
    <Container size="xs">
      {isLoading && <Spinner />}
      {userData && <OrganizationsGrid />}
    </Container>
  )
}

export default Organizations
