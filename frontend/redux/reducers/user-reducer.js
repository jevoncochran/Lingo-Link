import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL } from "../actions";

const initialState = {
  account: null,
  isLoading: false,
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        account: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
