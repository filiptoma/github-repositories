import { showNotification } from "@mantine/notifications"
import { AxiosError } from "axios"
import { useNavigate } from "react-router-dom"

const useError = () => {
  const navigate = useNavigate()

  const e = (err: unknown) => {
    showNotification({
      title: "Error occured",
      message:
        err instanceof AxiosError
          ? `[${err.response?.status}] ${err.response?.data.message}`
          : String(err),
      color: "red",
      autoClose: 4000
    })
    navigate("/")
  }

  return e
}

export default useError
