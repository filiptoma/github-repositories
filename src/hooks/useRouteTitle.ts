import { useEffect } from "react"

const useRouteTitle = (title: string) => {
  useEffect(() => {
    document.title = `${title} | GitHub Social Hub`
  }, [title])
}

export default useRouteTitle
