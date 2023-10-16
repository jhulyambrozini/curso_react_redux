import {configureStore} from '@reduxjs/toolkit'
import tokenSlice from './reducers/token'
import api from '../services/api'

const store = configureStore({
    reducer: {
        token: tokenSlice,
        [api.reducerPath]: api.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export default store
export type RootReducer = ReturnType<typeof store.getState>
