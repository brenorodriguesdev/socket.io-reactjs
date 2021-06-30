import { PlayerItemComponent } from '../PlayerItem'
import './index.css'

export function SideBarComponent() {
    return (
        <aside className="main">
            <PlayerItemComponent username="Player 1" />
            <PlayerItemComponent username="Player 2" />
            <PlayerItemComponent username="Player 3" />
        </aside>
    )
}