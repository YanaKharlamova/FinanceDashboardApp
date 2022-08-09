import axios from "axios";
import {
  FETCH_QUOTES_REQUEST,
  FETCH_QUOTES_SUCCESS,
  FETCH_QUOTES_FAILURE,
} from "./quotesTypes";

export const fetchQuotes = (quotes) => {
  return (dispatch) => {
    dispatch(fetchQuotesRequest());
    axios
      .get("http://localhost:4000")
      .then(() => {
        dispatch(fetchQuotesSuccess([...quotes]));
      })
      .catch((error) => {
        dispatch(fetchQuotesFailure(error.message));
      });
  };
};

export const fetchQuotesRequest = () => {
  return {
    type: FETCH_QUOTES_REQUEST,
  };
};

export const fetchQuotesSuccess = (quotes) => {
  return {
    type: FETCH_QUOTES_SUCCESS,
    payload: quotes,
  };
};

export const fetchQuotesFailure = (error) => {
  return {
    type: FETCH_QUOTES_FAILURE,
    payload: error,
  };
};
