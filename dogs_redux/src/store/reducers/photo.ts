import { PayloadAction} from '@reduxjs/toolkit'
import { PHOTO_GET } from '../../api';
import { AppDispatch } from '..';

const FETCH_PHOTO_STARTED = 'photo/fetchStarted';
const FETCH_PHOTO_SUCCESS = 'photo/fetchSuccess';
const FETCH_PHOTO_FAILED = 'photo/fetchFailed';

// Actions
const fetchPhotoStarted = () => ({
  type: FETCH_PHOTO_STARTED,
  payload: null
});

const fetchPhotoSuccess = (data: DataFeedPhoto) => ({
  type: FETCH_PHOTO_SUCCESS,
  payload: data,
});

const fetchPhotoFailed = (error: string) => ({
  type: FETCH_PHOTO_FAILED,
  payload: error,
});

type TState = {
    data: DataFeedPhoto | null;
    loading: boolean;
    error: null;
  };

// Reducer
const initialState: TState = {
  loading: false,
  error: null,
  data: null,
};

export default function photo(state = initialState, action: PayloadAction<any>) {
  switch (action.type) {
    case FETCH_PHOTO_STARTED:
      return {
        ...state,
        loading: true,
        data: null,
        error: null,
      };
    case FETCH_PHOTO_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    case FETCH_PHOTO_FAILED:
      return {
        ...state,
        loading: false,
        data: null,
        error: action.payload,
      };
    default:
      return state;
  }
}

// Async Actions
export const fetchPhoto = (id: number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(fetchPhotoStarted());
    const { url, options } = PHOTO_GET(id);
    const response = await fetch(url, options);
    const data = await response.json();
    if (response.ok === false) throw new Error(data.message);
    dispatch(fetchPhotoSuccess(data));
  } catch (error: any) {
    dispatch(fetchPhotoFailed(error.message));
  }
};
