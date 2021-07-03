import { useContext } from "react"
import { UserContext, UserContextProps } from "../contexts/UserContext"

export const useUser = (): UserContextProps => useContext(UserContext)
