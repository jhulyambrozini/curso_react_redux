import { configureStore, combineReducers } from "@reduxjs/toolkit"
import photo from "./reducers/photo"

const reducer = combineReducers({photo})

const store = configureStore({reducer})

export default store
export type RootReducer = ReturnType<typeof store.getState>