import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type StateType = {
    data: null | DataFeedPhoto,
    loading: boolean,
    error: undefined | string
}

export const getPhotoAsync = createAsyncThunk('feed/getPhoto', async ({id}: {id: number}) => {
    const response = await fetch(`https://dogsapi.origamid.dev/json/api/photo/${id}`, {
        method: 'GET',
        cache: 'no-store'
    })

    if(!response.ok) throw new Error('Não foi possivel fazer o fetch da foto.')
    const json = await response.json() as DataFeedPhoto
    return json
})

const initialState: StateType = {
    data: null,
    loading: false,
    error: undefined,
}

const photoSlice = createSlice({
    name: 'photo',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(getPhotoAsync.pending, (state) => {
            state.loading = true
            state.data = null
            state.error = undefined
        })
        .addCase(getPhotoAsync.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
            state.error = undefined
        })
        .addCase(getPhotoAsync.rejected, (state, action) => {
            state.loading = false
            state.data = null
            state.error = action.error.message
        })

    },
})

export default photoSlice.reducer