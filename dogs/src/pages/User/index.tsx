import { Route, Routes } from "react-router-dom"
import UserPhotoPost from "../../components/User/UserPhotoPost/UserPhotoPost"
import UserStatistics from "../../components/User/UserStatistics"
import Feed from "../../components/Feed/Feed"
import UserHeader from "../../components/User/UserHeader/UserHeader"
import { useUser } from "../../context/UserContext"

const User = () => {
  const {data} = useUser()

  if(!data) return null
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path='/' element={<Feed user={data?.id}/>}/>
        <Route path='post' element={<UserPhotoPost />}/>
        <Route path='statistics' element={<UserStatistics />}/>
      </Routes>
    </section>
  )
}

export default User