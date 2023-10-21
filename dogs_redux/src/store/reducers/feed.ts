import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type PhotosGetType = {
    page: number
    user: number | string
}

type StateType = {
    list: null | PhotosType[],
    loading: boolean,
    error: undefined | string,
    page: number
}

export const getPhotosAsync = createAsyncThunk('feed/getPhotos', async (data: PhotosGetType) => {
    const response = await fetch(`https://dogsapi.origamid.dev/json/api/photo/?_page=${data.page}&_total=6&_user=${data.user}`, {
        method: 'GET',
        cache: 'no-store'
    })

    if(!response.ok) throw new Error('Não foi possivel fazer o fetch das fotos.')
    const json = await response.json() as PhotosType[]
    return json
})

const initialState: StateType = {
    list: [],
    loading: false,
    error: undefined,
    page: 0
}

const feedSlice = createSlice({
    name: 'feed',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(getPhotosAsync.pending, (state) => {
            state.loading = true
            state.list = null
            state.error = undefined
        })
        .addCase(getPhotosAsync.fulfilled, (state, action) => {
            state.loading = false
            state.list = action.payload
            state.error = undefined
        })
        .addCase(getPhotosAsync.rejected, (state, action) => {
            state.loading = false
            state.list = null
            state.error = action.error.message
        })

    },
})

export default feedSlice.reducer