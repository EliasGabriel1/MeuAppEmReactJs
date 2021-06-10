import react, { createContext, useState } from 'react';

export default ContextProvider

export const UserContext = createContext({})

function ContextProvider({children}){
  const [text, setText] = useState('');
  return (
    <UserContext.Provider value={{ text, setText }} >
      {children}
    </UserContext.Provider>
  )
}
