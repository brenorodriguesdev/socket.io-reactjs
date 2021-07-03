import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { PlayerItemComponent } from '../PlayerItem'
import './index.css'


export function SideBarComponent() {
    const { users } = useContext(UserContext)

    return (
        <aside className="main">
            {users.map(user => <PlayerItemComponent user={user} key={user.id} />)}
        </aside>
    )
}