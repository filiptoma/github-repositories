import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import Spinner from "../components/Spinner"
import ReposTable from "../components/tables/ReposTable"
import useError from "../hooks/useError"
import useRouteTitle from "../hooks/useRouteTitle"
import { getRepos } from "../utils/api"
import { TRepository } from "../utils/types"

const Repositories = () => {
  const { userId } = useParams()
  useRouteTitle(`${userId}'s Repositories`)
  const [repos, setRepos] = useState<TRepository[]>()
  const [isLoading, setLoading] = useState<boolean>(false)
  const e = useError()

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      try {
        const res = userId && (await getRepos(userId))
        setRepos(res)
      } catch (err) {
        e(err)
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  return (
    <>
      {isLoading && <Spinner />}
      {repos && <ReposTable repos={repos} />}
    </>
  )
}

export default Repositories
