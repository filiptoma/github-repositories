import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import Spinner from "../components/Spinner"
import ReposTable from "../components/tables/ReposTable"
import useError from "../hooks/useError"
import { getRepos } from "../utils/api"
import { TRepository } from "../utils/types"

const Repos = () => {
  const { userId } = useParams()
  const [isLoading, setLoading] = useState<boolean>(false)
  const [repos, setRepos] = useState<TRepository[]>()

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      try {
        const res = userId && (await getRepos(userId))
        setRepos(res)
      } catch (err) {
        useError(err)
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

export default Repos
