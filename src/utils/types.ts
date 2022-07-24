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

export type TOrganisation = {
  avatar_url: string
  description: string
  login: string
}

export type TSearchForm = {
  user: string
}
