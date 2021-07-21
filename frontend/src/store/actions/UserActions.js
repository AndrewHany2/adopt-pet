import axios from "axios";
const baseURL = "/api/user";

export const getUser = (id) => async (dispatch) => {
  let list = "";
  try {
    dispatch({ type: "USER_REQUEST" });
    const header = {
      headers: {
        Authorization: window.localStorage.getItem("token"),
      },
    };
    const { data } = await axios.get(`${baseURL}/profile/${id}`, header);
    list = data;
    dispatch({
      type: "USER_SUCCESS",
      payload: list,
    });
  } catch (error) {
    dispatch({
      type: "USER_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

  
export const Login = (credentials) => async (dispatch) => {
  try {
    dispatch({ type: "USER_LOGIN_REQUEST" });
    const { data } = await axios.post("api/user/login", credentials);
    window.localStorage.setItem("userInfo", JSON.stringify(data));
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "USER_LOGIN_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
