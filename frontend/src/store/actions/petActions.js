import axios from "axios";
const baseURL = "/api/pets";

export const getPets = () => async (dispatch) => {
  try {
    dispatch({ type: "PET_LIST_REQUEST" });
    const { data } = await axios.get(baseURL);
    dispatch({
      type: "PET_LIST_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "PET_LIST_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


export const getPetInfo = (id) => async (dispatch) => {
  try {
    dispatch({ type: "PET_INFO_REQUEST" });
    const { data } = await axios.get(baseURL+"/"+id);
    dispatch({
      type: "PET_INFO_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "PET_INFO_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

