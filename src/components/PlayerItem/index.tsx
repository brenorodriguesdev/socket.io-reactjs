import { User } from '../../contexts/UserContext'
import { useUser } from '../../hooks/useUser'
import './index.css'

type PlayerItemProps = {
    user: User
}

export function PlayerItemComponent({ user }: PlayerItemProps) {
    const { updateUserTarget, userTarget, socket } = useUser()

    return (
        <div style={{ marginLeft: "2rem", marginTop: "2rem" }}>
            <p style={{ color: "#e6e5e5", fontSize: "16px" }} className={(userTarget && user.id === userTarget.id) || (user.id === socket.id) ? "usernameHover" : "username"}
                onClick={() => { if (user.id !== socket.id) updateUserTarget(user) }}>{user.username} {user.id === socket.id && "(você)"} </p>
            <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ backgroundColor: "#9ACD32", width: "8px", height: "8px", borderRadius: "100%", marginTop: "6px", marginRight: "0.2rem" }} />
                <p style={{ color: "#61625c", marginTop: "0.3rem", fontSize: "15px" }}>online</p>
            </div>
        </div>
    )
}