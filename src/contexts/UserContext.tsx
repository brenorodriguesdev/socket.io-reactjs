import { createContext, ReactNode, useState } from "react";
import socketIOClient, { Socket } from "socket.io-client";

export type User = {
    id: string
    username: string
}

export type UserContextProps = {
    users: User[]
    updateUsers: (users: User[]) => void
    userTarget: User | undefined
    updateUserTarget: (user: User) => void
    socket: Socket
}
const UserContext = createContext<UserContextProps>({} as UserContextProps)

type UserProviderProps = {
    children: ReactNode
}

function UserProvider({ children }: UserProviderProps) {

    const [users, setUsers] = useState<User[]>([])
    const [userTarget, setUserTarget] = useState<User | undefined>()
    const [socket] = useState(socketIOClient("http://192.168.1.86:3500"))

    function updateUsers(users: User[]): void {
        setUsers(users)
    }

    function updateUserTarget(user: User): void {
        setUserTarget(user)
    }


    return (
        <UserContext.Provider value={{ socket, users, updateUsers, userTarget, updateUserTarget }}>
            {children}
        </UserContext.Provider>
    )
}


export { UserContext, UserProvider }