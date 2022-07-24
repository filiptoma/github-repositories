import { TextInput, TextInputProps } from "@mantine/core"
import { useForm, yupResolver } from "@mantine/form"
import { SearchIcon } from "@heroicons/react/outline"
import SearchButton from "../buttons/SearchButton"
import { userSearchSchema } from "../../utils/schema"
import { useState } from "react"
import useUserSearch from "../../hooks/useUserSearch"

const SearchForm = (props: TextInputProps) => {
  const form = useForm({
    schema: yupResolver(userSearchSchema),
    initialValues: { user: "" }
  })

  const [isLoading, setLoading] = useState<boolean>(false)
  const fetchUser = useUserSearch(setLoading, form.setValues)

  return (
    <form onSubmit={form.onSubmit(({ user }) => fetchUser(user))}>
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
