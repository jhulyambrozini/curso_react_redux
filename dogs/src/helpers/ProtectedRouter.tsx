import { Navigate } from "react-router-dom"
import { useUser } from "../context/UserContext"
import { PropsWithChildren } from "react"

const ProtectedRouter = ({children}: PropsWithChildren) => {
    const {login} = useUser()
    return login ? children : <Navigate to='/login' />
}

export default ProtectedRouter