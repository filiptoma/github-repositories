import { useEffect } from "react"
import { useParams } from "react-router-dom"

import OrganizationsGrid from "../components/grids/OrganizationsGrid"
import Spinner from "../components/Spinner"
import useRouteTitle from "../hooks/useRouteTitle"
import useUserSearch from "../hooks/useUserSearch"

const Organizations = () => {
  const { userId } = useParams()
  useRouteTitle(`${userId}'s Organizations`)
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
