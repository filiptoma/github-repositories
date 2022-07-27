import { Container } from "@mantine/core"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import OrganizationsGrid from "../components/grids/OrganizationsGrid"
import Spinner from "../components/Spinner"
import { useUserData } from "../hooks/useUserData"
import useUserSearch from "../hooks/useUserSearch"

const Organizations = () => {
  const { userId } = useParams()
  const { fetchUser, isLoading, userData } = useUserSearch()

  useEffect(() => {
    fetchUser(userId)
  }, [])

  return (
    <>
      {isLoading && <Spinner />}
      {userData && <OrganizationsGrid />}
    </>
  )
}

export default Organizations
