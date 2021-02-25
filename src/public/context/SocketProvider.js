import React, {useContext, useState, useEffect} from 'react';
import io from 'socket.io-client';
import {API_URL_DEVELOPMENT} from '@env';

//redux
import {useSelector} from 'react-redux';

const SocketContext = React.createContext();

export function useSocket() {
  return useContext(SocketContext);
}

export function SocketProvider({children}) {
  const id = useSelector((state) => state.auth.id);
  console.log('This context is ' + id);
  const [socket, setSocket] = useState();

  useEffect(() => {
    const newSocketConnection = io(API_URL_DEVELOPMENT, {
      query: {id},
    });
    setSocket(newSocketConnection);

    return () => newSocketConnection.close();
  }, [id]);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
}
