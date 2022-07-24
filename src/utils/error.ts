import { AxiosError } from "axios"

const error = (err: unknown) =>
  err instanceof AxiosError ? err.response?.data.message : String(error)
export default error
