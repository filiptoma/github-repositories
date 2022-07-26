import { ExternalLinkIcon } from "@heroicons/react/outline"
import { ActionIcon, Box, Paper, Table, useMantineTheme } from "@mantine/core"

import BackButton from "../buttons/BackButton"

import { formatISODate } from "../../utils"
import { TRepository } from "../../utils/types"

type Props = {
  repos: TRepository[]
}

const ReposTable = ({ repos }: Props) => {
  const theme = useMantineTheme()

  const captions = ["Stars", "Name", "Language", "Created at", "Last modified", "URL"]
  const rows = repos
    .sort((x, y) => y.stargazers_count - x.stargazers_count)
    .map((repo, i) => (
      <tr key={i}>
        <td>{repo.stargazers_count}</td>
        <td>{repo.name}</td>
        <td>{repo.language}</td>
        <td>{formatISODate(repo.created_at)}</td>
        <td>{formatISODate(repo.updated_at)}</td>
        <td>
          <ActionIcon
            color="blue"
            variant="light"
            radius="md"
            component="a"
            href={repo.html_url}
            target="_blank"
          >
            <ExternalLinkIcon width={18} height={18} />
          </ActionIcon>
        </td>
      </tr>
    ))

  return (
    <>
      <Box my="sm">
        <BackButton />
      </Box>
      <Paper
        px="xl"
        py="sm"
        style={{
          backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
          border: theme.colorScheme === "dark" ? "none" : `1px solid ${theme.colors.gray[2]}`
        }}
      >
        <Table highlightOnHover striped>
          <thead>
            <tr>
              {captions.map((caption, i) => (
                <th key={i}>{caption}</th>
              ))}
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </Paper>
      {repos.length > 10 && (
        <Box my="sm">
          <BackButton />
        </Box>
      )}
    </>
  )
}

export default ReposTable
