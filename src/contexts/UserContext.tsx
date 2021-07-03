import { createContext, ReactNode, useState } from "react";

export type User = {
    id: string
    username: string
}

export type UserContextProps = {
    users: User[]
    updateUsers: (users: User[]) => void
    userTarget: User | undefined
    updateUserTarget: (user: User) => void
}
const UserContext = createContext<UserContextProps>({} as UserContextProps)

type UserProviderProps = {
    children: ReactNode
}

function UserProvider({ children }: UserProviderProps) {

    const [users, setUsers] = useState<User[]>([])
    const [userTarget, setUserTarget] = useState<User | undefined>()

    function updateUsers(users: User[]): void {
        setUsers(users)
    }

    function updateUserTarget(user: User): void {
        setUserTarget(user)
    }


    return (
        <UserContext.Provider value={{ users, updateUsers, userTarget, updateUserTarget }}>
            {children}
        </UserContext.Provider>
    )
}


export { UserContext, UserProvider }