/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useState } from 'react'

interface IAuthContext {
  id:string,
  token:string,
  modal:boolean,
  setModal:any,
  pageGerencial:string,
  setPageGerencial:any,
  login:string,
  setLogin:any,
}

interface IProvider {
  children:React.ReactNode
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext)

export const AuthContextProvider : React.FC<IProvider> = ({ children }) => {
  const [modal, setModal] = useState(false)
  const [login, setLogin] = useState('')
  const [pageGerencial, setPageGerencial] = useState('GerencialHome')

  return (

    <AuthContext.Provider

        value={

            {
              id: '',
              token: '',
              modal,
              setModal,
              pageGerencial,
              setPageGerencial,
              login,
              setLogin
            }

        }

    >

      {children}

    </AuthContext.Provider>
  )
}
