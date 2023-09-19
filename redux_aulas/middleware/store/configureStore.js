import thunk from './middleware/thunk.js'
import localStorage from './middleware/localStorage.js'

import token from './reducers/token.js'
import user from './reducers/user.js'

const { createStore, combineReducers, compose, applyMiddleware } = Redux

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancers = composeEnhancers(applyMiddleware(thunk, localStorage))

const reducer = combineReducers({token, user})
const store = createStore(reducer, enhancers)

export default store