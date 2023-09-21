import { PayloadAction, createSlice} from '@reduxjs/toolkit';
import { AppDispatch } from '..';

type State = {
  loading: boolean;
  data: null | any;
  error: null | string;
};

interface FetchConfigResult {
  url: string;
  options: any;
}

/**
 * Cria um slice com uma função assíncrona
 * @param {Object} config
 * @param {String} config.name
 * @param {Object} config.initialState
 * @param {Object} config.reducers
 * @param {Function} config.fetchConfig
 */
const createAsyncSlice = (config: {
  name: string
  initialState: State;
  reducers?: Record<string, (state: State, action: PayloadAction<any>) => void>;
  fetchConfig: (payload: any) => FetchConfigResult;
}) => {
  // cria um slice
  const slice = createSlice({
    // define um nome específico para o slice
    name: config.name,
    // o estado inicial possui propriedades específicas
    // mas podemos adicionar novas / escrever por cima das existentes
    initialState: {
      ...config.initialState,
    },
    // lista de reducers padrões
    reducers: {
      fetchStarted(state: State) {
        state.loading = true;
      },
      fetchSuccess(state: State, action: PayloadAction<null | any>) {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      },
      fetchError(state: State, action: PayloadAction<null | any>) {
        state.loading = false;
        state.data = null;
        state.error = action.payload;
      },
      // novos reducers caso necessário
      ...(config.reducers || {}),
    },
  });

  // desestruturação das ações
  const { fetchStarted, fetchSuccess, fetchError } = slice.actions;

  // ação assíncrona (thunk), recebe um payload
  const asyncAction = (payload: any) => async (dispatch: AppDispatch) => {
    try {
      dispatch(fetchStarted());
      // config.fetchConfig é um método que retorna
      // o url e as opções do fetch
      const { url, options } = config.fetchConfig(payload);
      
      console.log(options)
      const response = await fetch(url, options);
      const data = await response.json();
      if(response.ok === false) throw new Error(data.message)
      dispatch(fetchSuccess(data));
    } catch (error: any) {
      dispatch(fetchError(error.message));
    }
  };

  // a função retorna as propriedades de slice e a ação assíncrona
  return { ...slice, asyncAction };
};

export default createAsyncSlice;
