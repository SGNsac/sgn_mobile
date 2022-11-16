/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useState } from 'react'

interface IAuthContext {
  id:string,
  token:string,
  modal:boolean,
  setModal:any,
  login:string,
  setLogin:any,
  usuaCod:string,
  setUsuaCod:any,
  page:string,
  setPage:any
}

interface IProvider {
  children:React.ReactNode
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext)

export const AuthContextProvider : React.FC<IProvider> = ({ children }) => {
  const [modal, setModal] = useState(false)
  const [login, setLogin] = useState('')
  const [page, setPage] = useState('GerencialHome')
  const [usuaCod, setUsuaCod] = useState('')

  return (

    <AuthContext.Provider

        value={

            {
              id: '',
              token: '',
              modal,
              setModal,
              page,
              login,
              setLogin,
              usuaCod,
              setUsuaCod,
              setPage
            }

        }

    >

      {children}

    </AuthContext.Provider>
  )
}
