import { Dispatch, SetStateAction } from "react"
import { useNavigate } from "react-router-dom"
import { getUserData } from "../utils/api"
import { useUserData } from "./useUserData"

const useUserSearch = (setLoading: Dispatch<SetStateAction<boolean>>) => {
  const navigate = useNavigate()
  const [, setUserData] = useUserData()

  const fetch = async (user: string) => {
    setLoading(true)
    try {
      const res = await getUserData(user)
      setUserData(res)
    } catch (err) {
      // TODO: error handling - UI notification
      console.error(err)
    } finally {
      // TODO: clear input field
      setLoading(false)
      navigate(`/${user}`)
    }
  }

  return fetch
}

export default useUserSearch
