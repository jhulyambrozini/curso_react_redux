import { TOKEN_POST } from "../../api";
import createAsyncSlice from "../helper/createAsyncSlice";
import { User } from "./user";

const tokenSlice = createAsyncSlice({
    name: 'token',
    initialState:{
        loading: false,
        data: null,
        error: null
    },
    fetchConfig: (user: User) => TOKEN_POST(user)
})

export const fetchToken = tokenSlice.asyncAction
export default tokenSlice.reducer