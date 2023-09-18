import { useParams } from "react-router-dom"
import Feed from "../../components/Feed/Feed"

const UserProfile = () => {
    const {user} = useParams()
   
    if(user)
        return (
            <section className="mainContainer container">
                <h1 className="title">{user}</h1>
                <Feed user={user} />
            </section>
        )
    else return null
}

export default UserProfile