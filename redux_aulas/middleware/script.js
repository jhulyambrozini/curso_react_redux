import store from "./store/configureStore.js";
import { tokenFetch } from "./store/reducers/token.js";
import { userFetch } from "./store/reducers/user.js";

console.log(store.getState())

async function login(user){
    let state = store.getState()
    if(state.token.data === null){
        await store.dispatch(tokenFetch(user))
        state = store.getState()
    }
    await store.dispatch(userFetch(state.token.data))
}

login({username: 'dog', password: 'dog'})