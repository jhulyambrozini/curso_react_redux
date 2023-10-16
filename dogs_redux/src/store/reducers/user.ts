import { createSlice } from '@reduxjs/toolkit'

type TypeState = {
    token: null | string
}

const initialState: TypeState = {
    token: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userLogin: () => {
            
        }
    }

})

export default userSlice.reducer