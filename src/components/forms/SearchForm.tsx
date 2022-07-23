import { TextInput, TextInputProps } from "@mantine/core"
import { useForm, yupResolver } from "@mantine/form"
import { SearchIcon } from "@heroicons/react/outline"
import SearchButton from "../buttons/SearchButton"
import { userSearchSchema } from "../../utils/schema"
import { useCallback, useState } from "react"
import { getUserData } from "../../utils/api"
import { useUserData } from "../../hooks/useUserData"
import { useNavigate } from "react-router-dom"

const SearchForm = (props: TextInputProps) => {
  const form = useForm({
    schema: yupResolver(userSearchSchema),
    initialValues: { user: "" }
  })

  const [, setUserData] = useUserData()
  const navigate = useNavigate()
  const [isLoading, setLoading] = useState<boolean>(false)

  // minoveaz
  // abhisheknaiidu
  const fetch = useCallback(async (user: string) => {
    setLoading(true)
    try {
      const res = await getUserData(user)
      setUserData(res)
    } catch (err) {
      // TODO: error handling - notification UI
      console.error(err)
    } finally {
      // TODO: clear input field
      setLoading(false)
      navigate(`/${user}`)
    }
  }, [])

  return (
    <form onSubmit={form.onSubmit(({ user }) => fetch(user))}>
      <TextInput
        icon={<SearchIcon width={18} height={18} />}
        radius="xl"
        size="md"
        rightSection={<SearchButton isLoading={isLoading} />}
        placeholder="Search Github users"
        rightSectionWidth={42}
        {...form.getInputProps("user")}
        {...props}
      />
    </form>
  )
}

export default SearchForm
