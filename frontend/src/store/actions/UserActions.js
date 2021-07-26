import axios from "axios";
const baseURL = "/api/user";

export const getUser = (id) => async (dispatch) => {
  let list = "";
  try {
    dispatch({ type: "USER_DATA_REQUEST" });
    const userInfo = JSON.parse(window.localStorage.getItem("userInfo"));
    const header = {
      headers: {

        Authorization: userInfo.token,
      },
    };
    const { data } = await axios.get(`${baseURL}/profile/${id}`, header);
    list = data;
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


export const getProfile =(userId) => async (dispatch) => {
  try {
    
    dispatch({ type: "PET_USER_PROFILE_REQUEST" });
    const userInfo =JSON.parse(window.localStorage.getItem("userInfo"))


    const header = {
      headers: {
        Authorization: userInfo.token 
      }
    }
      const {data} = await axios.get(`${baseURL}/profile/${userId}`,header);
      const userData  = data;
      let pets = {}
      if(userData?.postedPets.length !== 0){

        const stringData =  userData.postedPets.map((value) => `${value}`).join(',');
         pets = await axios.get(`/api/pets/userpets/list/?postedpets=${stringData}`,header);
      }
      let petsData = pets.data?pets.data:[]
      console.log("pets Data Action")
      console.log(petsData)

    dispatch({
      type: "PET_USER_PROFILE_SUCCESS",
      payload: {userData:userData, petsData:petsData},
    });
  } catch (error) {
    dispatch({
      type: "PET_USER_PROFILE_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

