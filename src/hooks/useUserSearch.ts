import { showNotification } from "@mantine/notifications"
import { Dispatch, SetStateAction } from "react"
import { useNavigate } from "react-router-dom"
import { getUserData } from "../utils/api"
import error from "../utils/error"
import { TSearchForm } from "../utils/types"
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
      showNotification({
        title: "Error occured",
        message: error(err),
        color: "red",
        autoClose: 5000
      })
      navigate("/")
    } finally {
      setValues && setValues({ user: "" })
      setLoading(false)
    }
  }

  return fetchUser
}

export default useUserSearch
