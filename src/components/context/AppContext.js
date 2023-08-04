import React from 'react'
import { createContext } from 'react'

export const context=createContext()

function AppContext({children}) {

    //data
    const quality="kind"
    const x=1
  return (
    <context.Provider value={{quality,x}}>{children}</context.Provider>
  )
}
//value={{quality,x}}
export default AppContext