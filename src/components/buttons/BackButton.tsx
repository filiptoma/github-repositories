import { ActionIcon } from "@mantine/core"
import { ChevronLeftIcon } from "@heroicons/react/outline"
import { useNavigate } from "react-router-dom"

const BackButton = () => {
  const navigate = useNavigate()
  return (
    <ActionIcon
      size={48}
      radius="xl"
      onClick={() => navigate(-1)}
      sx={(theme) => ({
        position: "absolute",
        "&:hover": {
          backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
        }
      })}
    >
      <ChevronLeftIcon width={24} height={24} />
    </ActionIcon>
  )
}

export default BackButton
