import  { createContext, ReactNode, useState } from "react";

export type User = {
    id: string
    username: string
}

export type UserContextProps = {
    users: User[]
    updateUsers: any
}
const UserContext = createContext<UserContextProps>({} as UserContextProps)

type UserProviderProps = {
    children: ReactNode
}

function UserProvider({ children }: UserProviderProps) {

    const [users, setUsers] = useState<User[]>([])

    function updateUsers(users: User[]): void {
        setUsers(users)
    }


    return (
        <UserContext.Provider value={{ users, updateUsers }}>
            {children}
        </UserContext.Provider>
    )
}


export { UserContext, UserProvider }