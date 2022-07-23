import { ArrowRightIcon } from "@heroicons/react/outline"
import { ActionIcon, useMantineTheme } from "@mantine/core"

type Props = {
  isLoading: boolean
}

const SearchButton = ({ isLoading }: Props) => {
  const theme = useMantineTheme()
  return (
    <ActionIcon
      type="submit"
      loading={isLoading}
      size={32}
      radius="xl"
      color={theme.primaryColor}
      variant="filled"
    >
      <ArrowRightIcon width={18} height={18} />
    </ActionIcon>
  )
}

export default SearchButton
