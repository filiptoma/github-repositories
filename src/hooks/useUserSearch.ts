import { useState } from "react"
import { useNavigate } from "react-router-dom"

import useError from "./useError"
import { useUserData } from "./useUserData"

import { getUserData } from "../utils/api"

const useUserSearch = () => {
  const navigate = useNavigate()
  const [userData, setUserData] = useUserData()
  const [isLoading, setLoading] = useState<boolean>(false)
  const e = useError()

  const fetchUser = async (userId?: string, to?: string) => {
    // if trying to view user that is already loaded in state
    if (userId === userData?.user.login) {
      to && navigate(to)
      return
    }
    setLoading(true)
    try {
      const res = await getUserData(userId ?? "")
      setUserData(res)
      to && navigate(to)
    } catch (err) {
      e(err)
    } finally {
      setLoading(false)
    }
  }

  return {
    fetchUser,
    isLoading,
    userData
  }
}

export default useUserSearch
