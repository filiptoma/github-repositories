import { Container } from "@mantine/core"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

import UserCard from "../components/cards/UserCard"
import Spinner from "../components/Spinner"
import useUserSearch from "../hooks/useUserSearch"

const User = () => {
  // minoveaz
  // abhisheknaiidu
  // mchehab
  const { userId } = useParams()
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
