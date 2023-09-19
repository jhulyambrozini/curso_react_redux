import { Route, Routes } from "react-router-dom"
import UserPhotoPost from "../../components/User/UserPhotoPost/UserPhotoPost"
import UserStatistics from "../../components/User/UserStatistics/UserStatistics"
import Feed from "../../components/Feed/Feed"
import UserHeader from "../../components/User/UserHeader/UserHeader"
import { useUser } from "../../context/UserContext"
import NotFound from "../NotFound/NotFound"
import Head from "../../helpers/Head"

const User = () => {
  const {data} = useUser()

  if(!data) return null
  return (
    <section className="container">
      <Head title="Minha conta" description="Feed de fotos do prório usuário" />
      <UserHeader />
      <Routes>
        <Route path='/' element={<Feed user={data?.id}/>}/>
        <Route path='post' element={<UserPhotoPost />}/>
        <Route path='statistics' element={<UserStatistics />}/>
        <Route
              path="*"
              element={<NotFound />}
            />
      </Routes>
    </section>
  )
}

export default User