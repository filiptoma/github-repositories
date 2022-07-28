import { SearchIcon } from "@heroicons/react/outline"
import { TextInput, TextInputProps } from "@mantine/core"
import { useForm, yupResolver } from "@mantine/form"

import SearchButton from "../buttons/SearchButton"

import useUserSearch from "../../hooks/useUserSearch"
import { userSearchSchema } from "../../utils/schema"

const SearchForm = (props: TextInputProps) => {
  const { fetchUser, isLoading } = useUserSearch()
  const form = useForm({
    schema: yupResolver(userSearchSchema),
    initialValues: { user: "" }
  })

  return (
    <form onSubmit={form.onSubmit(({ user }) => fetchUser(user, `/${form.values.user}`))}>
      <TextInput
        icon={<SearchIcon width={18} height={18} />}
        radius="xl"
        size="md"
        rightSection={<SearchButton isLoading={isLoading} />}
        placeholder="Search GitHub users"
        rightSectionWidth={42}
        {...form.getInputProps("user")}
        {...props}
      />
    </form>
  )
}

export default SearchForm
