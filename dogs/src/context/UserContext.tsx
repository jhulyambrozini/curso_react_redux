import {PropsWithChildren, createContext, useState, useContext, useEffect, useCallback } from 'react'
import { GET_USER, TOKEN_POST, TOKEN_VALIDATE_POST } from '../api'
import { useNavigate } from 'react-router-dom'

type IUserContext = {
    userLogin: (username: string, password: string) => Promise<void>
    userLogout: () => Promise<void>
    data: UserResponse | null
    error: null | string
    login: boolean | null
    loading: boolean
}

type TokenResponse = {
    token: string
    user_display_name: string
    user_email: string
    user_nicename: string
}

type UserResponse = {
    email: string
    id: number
    nome: string
    username: string
}

export const UserContext = createContext<IUserContext | null>(null)

export const useUser = () => {
    const context = useContext(UserContext)
    if(context === null) throw new Error('UserContext deve está dentro de um provider')
    return context
}

export const UserStorage = ({children}: PropsWithChildren) => {
    const [data, setData] = useState<UserResponse | null>(null)
    const [login, setLogin] = useState<boolean | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const navigate = useNavigate()

    const userLogout = useCallback( async () => {
        setData(null)
        setError(null)
        setLoading(false)
        setLogin(null)
        window.localStorage.removeItem('token')
        navigate('/login')
    }, [navigate])


    useEffect(() => {
      const autoLogin = async () => {
        const token = window.localStorage.getItem('token')
        if(token) {
            try {
                setError(null)
                setLoading(true)
                const {url, options} = TOKEN_VALIDATE_POST(token)
                const response = await fetch(url, options)

                if(!response.ok) throw new Error('Token inválido')

                await getUser(token)
            } catch (error){
                userLogout()
            } finally {
                setLoading(false)
            }
        }
      }
      autoLogin()
    }, [userLogout])
    

    const getUser = async (token: string) => {
        const {url, options} = GET_USER(token)
        const response = await fetch(url, options)
       const json: UserResponse = await response.json()

       setData(json)
       setLogin(true)
    }

    const userLogin = async (username: string, password: string) => {
        try {
            setError(null)
            setLoading(false)
            const {url, options} = TOKEN_POST({username, password})
            const tokenRes = await fetch(url, options)
            if(!tokenRes.ok) throw new Error(`Error ${tokenRes.statusText}`)
            const {token}: TokenResponse = await tokenRes.json()
            window.localStorage.setItem('token', token)
            await getUser(token)
            navigate('/account')
        } catch(err: any) {
            setError(err.message)
            setLogin(false)
        } finally {
            setLoading(false)
        }  
    }

  return (
    <UserContext.Provider value={{userLogin, data, userLogout, error, loading, login}}>{children}</UserContext.Provider>
  )
}
