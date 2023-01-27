import React, { useContext, useEffect, useState } from "react";
import io from "socket.io-client";

const SocketContext = React.createContext();

export function useSocket() {
  return useContext(SocketContext);
}

export const SocketProvider = ({ userId, children }) => {
  const [socket, setSocket] = useState();
  useEffect(() => {
    const newSocket = io("http://localhost:5000", { query: { userId } });
    setSocket(newSocket);
    return () => newSocket.close();
  }, [userId]);
  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};
