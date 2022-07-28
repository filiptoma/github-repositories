import { Container } from "@mantine/core"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

import UserCard from "../components/cards/UserCard"
import Spinner from "../components/Spinner"
import useRouteTitle from "../hooks/useRouteTitle"
import useUserSearch from "../hooks/useUserSearch"

const User = () => {
  const { userId } = useParams()
  useRouteTitle(userId ?? "")
  const { fetchUser, isLoading, userData } = useUserSearch()

  useEffect(() => {
    fetchUser(userId)
  }, [])

  return (
    <Container size="xs">
      {isLoading && <Spinner />}
      {userData && <UserCard />}
    </Container>
  )
}

export default User
