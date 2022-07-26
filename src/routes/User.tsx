import { Container } from "@mantine/core"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import UserCard from "../components/cards/UserCard"
import Spinner from "../components/Spinner"
import { useUserData } from "../hooks/useUserData"
import useUserSearch from "../hooks/useUserSearch"

const User = () => {
  // minoveaz
  // abhisheknaiidu
  // mchehab
  const { userId } = useParams()
  const [isLoading, setLoading] = useState<boolean>(false)
  const fetchUser = useUserSearch(setLoading)
  const [userData] = useUserData()

  useEffect(() => {
    // if trying to view same user as the one already in state
    if (!userId || userData?.user.login === userId) {
      return
    }
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
