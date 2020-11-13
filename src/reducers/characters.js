import {
  GET_CHARACTERS,
  GET_CHARACTERS_ERROR,
  SET_DEFAULT_PAGE,
  SET_COUNT,
  SET_IS_LOADING,
} from "../actions/types";

const initialState = {
  loading: true,
  data: [],
  defaultPage: 1,
  count: 0,
  isLoading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CHARACTERS:
      return {
        ...state,
        loading: false,
        data: [...state.data, ...action.payload],
      };
    case GET_CHARACTERS_ERROR:
      return {
        ...state,
        loading: false,
        data: null,
      };
    case SET_DEFAULT_PAGE:
      return {
        ...state,
        defaultPage: action.defaultPage,
      };
    case SET_COUNT:
      return {
        ...state,
        count: action.count,
      };
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    default:
      return state;
  }
}
