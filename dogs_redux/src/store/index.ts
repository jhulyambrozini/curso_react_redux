import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import photo from "./reducers/photo"
import token from "./reducers/token"
import user from "./reducers/user"

const reducer = combineReducers({photo, token, user})

const store = configureStore({reducer})

export default store
export type RootReducer = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch