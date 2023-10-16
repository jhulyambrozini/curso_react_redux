import { createSlice } from '@reduxjs/toolkit'

type TypeState = {
    token: null | string
}

const initialState: TypeState = {
    token: null
}

const tokenSlice = createSlice({
    name: 'token',
    initialState,
    reducers: {

    }

})

export default tokenSlice.reducer