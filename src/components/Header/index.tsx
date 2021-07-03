import './index.css'

type HeaderComponentProps = {
    username: string
}

export function HeaderComponent({ username }: HeaderComponentProps) {
    return (
        <div className="containerHeader">
            <div style={{ display: "flex", alignItems: "center" }} className="textHeader">
                <div style={{ backgroundColor: "#9ACD32", width: "8px", height: "8px", borderRadius: "100%", marginTop: "6px", marginRight: "0.2rem" }} />
                <p style={{ color: "#61625c", marginTop: "0.3rem", fontSize: "15px" }}>{username}</p>
            </div>
        </div>
    )
}