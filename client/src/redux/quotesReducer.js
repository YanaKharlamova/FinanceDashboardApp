import {
  FETCH_QUOTES_REQUEST,
  FETCH_QUOTES_SUCCESS,
  FETCH_QUOTES_FAILURE,
} from "./quotesTypes";

const initialState = {
  quotes: [],
  error: "",
};

const quotesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUOTES_REQUEST:
      return {
        ...state,
      };
    case FETCH_QUOTES_SUCCESS:
      return {
        quotes: action.payload,
        error: "",
      };
    case FETCH_QUOTES_FAILURE:
      return {
        quotes: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default quotesReducer;
