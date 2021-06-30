type PlayerItemProps = {
    username: string
}

export function PlayerItemComponent({ username }: PlayerItemProps) {
    return (
        <div style={{ marginLeft: "2rem", marginTop: "2rem" }}>
            <p style={{ color: "#e6e5e5", fontSize: "16px" }}>{username}</p>
            <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ backgroundColor: "#9ACD32", width: "8px", height: "8px", borderRadius: "100%", marginTop: "6px", marginRight: "0.2rem" }} />
                <p style={{ color: "#61625c", marginTop: "0.3rem", fontSize: "15px" }}>online</p>
            </div>
        </div>
    )
}