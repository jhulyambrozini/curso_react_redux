import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

type UserResponse = {
    email: string;
    id: number;
    nome: string;
    username: string;
}

type TypeState = {
    data: null | UserResponse 
    error: undefined | string
    loading: boolean
    login: boolean
}

type loginUserResponse = {
  token: string
  user_display_name: string
  user_email: string
  user_nicename: string
}

export const fetchUser = async (token: string) => {
  const response = await fetch(`https://dogsapi.origamid.dev/json/api/user/`, {
    method: 'GET',
    headers: {
        Authorization: 'Bearer' + token
    }
  });
  const data = await response.json()
  return data;
}

export const loginUserAsync = createAsyncThunk('user/login', async (credentials: { username: string, password: string }) => {
  const response = await fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
    method: 'POST',
    headers:{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  });

  if (response.ok) {
    const json: loginUserResponse = await response.json()
    window.localStorage.setItem('token', json.token);
    const data = await fetchUser(json.token)
    return data;
  } else {
    throw new Error('Falha no login');
  }
});

export const autoLoginAsync = createAsyncThunk('user/autoLogin', async (token: string) => {
  const response = await fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token/validate', {
    method: 'POST',
    headers: {
        Authorization: 'Bearer ' + token
    },
  });

  if (!response.ok) throw new Error('Falha no login automático')

  const data = await fetchUser(token)
  return data

});

const initialState: TypeState = {
  data: null,
  login: false,
  loading: false,
  error: undefined,
}

const userSlice = createSlice({
name: 'user',
initialState,
reducers: {
  userLogout: (state) => {
    state.data = null
    state.error = undefined
    state.loading = false
    state.login = false

    window.localStorage.removeItem('token')
  }
},
extraReducers: (builder) => {
  builder
    .addCase(loginUserAsync.pending, (state) => {
      state.loading = true;
    })
    .addCase(loginUserAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.login = true;
    })
    .addCase(loginUserAsync.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.login = false;
    })
    .addCase(autoLoginAsync.pending, (state) => {
      state.loading = true;
    })
    .addCase(autoLoginAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.login = true;
    })
    .addCase(autoLoginAsync.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.login = false;
    });
},
});

export default userSlice.reducer;
export const {userLogout} = userSlice.actions

