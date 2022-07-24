import { Group, Text } from "@mantine/core"
import { ComponentProps, ComponentType } from "react"

type Props = {
  Icon: ComponentType<ComponentProps<"svg">>
  stat?: string
  url?: string
}

const IconStat = ({ Icon, stat, url }: Props) => {
  return (
    <Group align="start">
      <Icon width={20} height={20} />
      {url ? (
        <Text component="a" href={url} target="_blank">
          {stat}
        </Text>
      ) : (
        <Text>{stat}</Text>
      )}
    </Group>
  )
}

export default IconStat
