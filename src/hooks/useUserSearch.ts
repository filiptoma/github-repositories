import { Dispatch, SetStateAction } from "react"
import { useNavigate } from "react-router-dom"
import { getUserData } from "../utils/api"
import { TSearchForm } from "../utils/types"
import useError from "./useError"
import { useUserData } from "./useUserData"

const useUserSearch = (
  setLoading: Dispatch<SetStateAction<boolean>>,
  setValues?: Dispatch<SetStateAction<TSearchForm>>
) => {
  const navigate = useNavigate()
  const [, setUserData] = useUserData()

  const fetchUser = async (user: string) => {
    setLoading(true)
    try {
      const res = await getUserData(user)
      setUserData(res)
      navigate(`/${user}`)
    } catch (err) {
      useError(err)
    } finally {
      setValues && setValues({ user: "" })
      setLoading(false)
    }
  }

  return fetchUser
}

export default useUserSearch
