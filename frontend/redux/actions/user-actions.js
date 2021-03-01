import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const userLogin = (credentials) => (dispatch) => {
  dispatch({ type: LOGIN_START });
  axios
    .post("http://localhost:5000/api/auth/login", credentials)
    .then((res) => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.account });
    })
    .catch((err) => {
      dispatch({ type: LOGIN_FAIL, payload: err });
    });
};
