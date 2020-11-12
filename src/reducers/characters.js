import {
  GET_CHARACTERS,
  GET_CHARACTERS_ERROR,
  SET_DEFAULT_PAGE,
  SET_DEFAULT_PAGE_ERROR,
  SET_COUNT,
} from "../actions/types";

const initialState = {
  loading: true,
  data: [],
  defaultPage: 1,
  count: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CHARACTERS:
      return {
        ...state,
        loading: false,
        data: action.payload,
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
    case SET_DEFAULT_PAGE_ERROR:
      return {
        ...state,
        defaultPage: 1,
      };
    case SET_COUNT:
      return {
        ...state,
        count: action.count,
      };
    default:
      return state;
  }
}
