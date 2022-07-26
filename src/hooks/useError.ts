import { showNotification } from "@mantine/notifications"
import { AxiosError } from "axios"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const useError = (err: unknown) => {
  const navigate = useNavigate()
  useEffect(() => {
    showNotification({
      title: "Error occured",
      message: err instanceof AxiosError ? err.response?.data.message : String(err),
      color: "red",
      autoClose: 6000
    })
    navigate("/")
  }, [err])
}

export default useError
