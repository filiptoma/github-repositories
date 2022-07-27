import { ChevronLeftIcon } from "@heroicons/react/outline"
import { ActionIcon, Box, BoxProps } from "@mantine/core"
import { useNavigate } from "react-router-dom"

type Props = {
  absolute?: boolean
}

const BackButton = ({ absolute, ...props }: Props & BoxProps<any>) => {
  const navigate = useNavigate()
  return (
    <Box {...props}>
      <ActionIcon
        size={48}
        radius="xl"
        onClick={() => navigate(-1)}
        sx={(theme) => ({
          position: absolute ? "absolute" : "relative",
          backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2],
          "&:hover": {
            backgroundColor:
              theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
          }
        })}
      >
        <ChevronLeftIcon width={24} height={24} />
      </ActionIcon>
    </Box>
  )
}

export default BackButton
