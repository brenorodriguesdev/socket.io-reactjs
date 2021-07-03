import { ReactNode } from 'react'
import './index.css'

type ModalNameProps = {
    title: string
    children: ReactNode
}

export function ModalNameComponent({ title, children }: ModalNameProps) {
    return (
        <div className="modalMain">
            <div className="modalContainer">
                <div className="modalHeader">
                    <p style={{fontWeight:"bold",color:"#555"}}>{title}</p>
                </div>
                {children}
            </div>
        </div>
    )
}