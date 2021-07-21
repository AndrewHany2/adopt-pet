import axios from "axios";
const baseURL = "/api/user";

export const getUser = (id) => async (dispatch) => {
  let list = "";
  try {
    dispatch({ type: "USER_DATA_REQUEST" });
    const userInfo =JSON.parse(window.localStorage.getItem("userInfo"))


    const header = {
      headers: {
        Authorization: userInfo.token 
      }
    }
      const {data} = await axios.get(`${baseURL}/profile/${id}`,header);
       list = data;
       console.log(list)
    dispatch({
      type: "USER_DATA_SUCCESS",

      payload: list,
    });
  } catch (error) {
    dispatch({
      type: "USER_DATA_FAIL",

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
    const { data } = await axios.post(`${baseURL}/login`, credentials);

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

export const RegisterUser = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "USER_REGISTER_REQUEST" });
    const { data } = await axios.post("/api/user/register", userData); 
    dispatch({ type: "USER_REGISTER_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "USER_REGISTER_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: "USER_LOGOUT" });
  dispatch({ type: "USER_DATA_RESET" });
};
