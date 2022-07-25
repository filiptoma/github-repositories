import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getRepos } from "../utils/api"

const Repos = () => {
  const { userId } = useParams()
  const [isLoading, setLoading] = useState<boolean>(false)
  // const [repos, setRepos]

  useEffect(() => {
    ;(async () => {
      const res = userId && (await getRepos(userId))
      console.log(res)
    })()
  }, [])

  return <div>repos route</div>
}

export default Repos
