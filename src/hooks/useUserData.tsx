import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react"

import { TOrganization, TUser } from "../utils/types"

type UserData =
  | {
      user: TUser
      orgs: [TOrganization]
    }
  | undefined

type UserDataState = [UserData, Dispatch<SetStateAction<UserData>>]

const UserDataContext = createContext<UserDataState>(undefined as never)

type Props = {
  children: ReactNode
}

export const UserDataProvider = ({ children }: Props) => {
  const [userData, setUserData] = useState<UserData>()
  return (
    <UserDataContext.Provider value={[userData, setUserData]}>{children}</UserDataContext.Provider>
  )
}

export const useUserData = () => useContext(UserDataContext)
