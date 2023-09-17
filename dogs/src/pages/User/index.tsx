import { Route, Routes } from "react-router-dom"
import UserPhotoPost from "../../components/User/UserPhotoPost"
import UserStatistics from "../../components/User/UserStatistics"
import Feed from "../../components/Feed/Feed"
import UserHeader from "../../components/User/UserHeader/UserHeader"

const User = () => {
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path='/' element={<Feed />}/>
        <Route path='post' element={<UserPhotoPost />}/>
        <Route path='statistics' element={<UserStatistics />}/>
      </Routes>
    </section>
  )
}

export default User