import './index.css'
import { SideBarComponent } from "../../components/SideBar";
import socketIOClient from "socket.io-client";
import { useEffect, useState } from 'react';
import { ModalNameComponent } from '../../components/ModalName';
import { User } from '../../contexts/UserContext';
import { useUser } from '../../hooks/useUser';
import { HeaderComponent } from '../../components/Header';

export function HomePage() {

  const [isOpen, setIsOpen] = useState(true)
  const [username, setUsername] = useState("")
  const [socket] = useState(socketIOClient("http://192.168.1.86:3500"))
  const { updateUsers } = useUser()

  useEffect(() => {

    socket.on("sendPlayers", (users: User[]) => {
      updateUsers(users)
    })

  }, [])


  const onConnect = () => {
    if (username) {
      socket.emit('onConnect', username)
      setIsOpen(false)
    }
  }

  return (
    <>
      { isOpen || <HeaderComponent /> }
      <SideBarComponent />
      {isOpen && <ModalNameComponent title="Digite seu apelido">
        <input type="text" onChange={(event) => { setUsername(event.target.value) }} style={{ backgroundColor: "transparent", border: "1px solid", fontSize: "14px", borderTopColor: "transparent", borderRightColor: "transparent", borderLeftColor: "transparent", width: "20rem", borderBottomColor: "#555", textAlign: "center" }} />
        <button onClick={onConnect} style={{ width: "20rem", height: "2rem" }}>Entrar</button>
      </ModalNameComponent>}
    </>
  );
}

