
import { AppDispatch } from "..";
import { GET_USER } from "../../api";
import createAsyncSlice from "../helper/createAsyncSlice";
import { fetchToken } from "./token";

export type User = {
    password: string
    username: string
}

const userSlice = createAsyncSlice({
    name: 'user',
    initialState:{
        loading: false,
        data: null,
        error: null
    },
    fetchConfig: (token: string) => GET_USER(token)
})

export const fetchUser = userSlice.asyncAction

export const userLogin = (user: User) => async (dispatch: AppDispatch) => {
    await dispatch(fetchToken(user))
  //  if(payload && payload.token) await dispatch(fetchUser(payload.token))
}

export default userSlice.reducer