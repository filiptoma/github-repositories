export type TUser = {
  avatar_url: string
  bio: string
  blog: string
  created_at: string
  followers: number
  following: number
  location: string
  login: string
  name: string
  public_gists: number
  public_repos: number
  type: "User" | "Organization"
}

export type TOrganization = {
  avatar_url: string
  login: string
  description: string
}

export type TRepository = {
  created_at: string
  updated_at: string
  name: string
  html_url: string
  language: string
  stargazers_count: number
}

export type TSearchForm = {
  user: string
}
