import {configureStore} from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import userSlice from './reducers/user'
import api from '../services/api'

const store = configureStore({
    reducer: {
        user: userSlice,
        [api.reducerPath]: api.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export default store
export type RootReducer = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch