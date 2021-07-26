import axios from "axios";
const baseURL = "/api/pets";

export const getPets =
  (currentPage, filterByGender, filterByPet, filterByAge, limit) =>
  async (dispatch) => {
    let list = "";
    try {
      dispatch({ type: "PET_LIST_REQUEST" });
      if (filterByPet || filterByGender || filterByAge) {
        const { data } = await axios.get(
          `${baseURL}?gender=${filterByGender}&petType=${filterByPet}&age=${filterByAge}&page=${currentPage}&status=ACCEPTED`
        );
        list = data;
      } else {
        const { data } = await axios.get(
          `${baseURL}?page=${currentPage}&limit=${limit}&status=ACCEPTED`
        );
        list = data;
      }
      dispatch({
        type: "PET_LIST_SUCCESS",
        payload: list,
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
    const { data } = await axios.get(baseURL + "/" + id);
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
export const adoptpet = (pet) => async (dispatch) => {
  try {
    const userInfo = JSON.parse(window.localStorage.getItem("userInfo"));
    dispatch({ type: "PET_ADOPT_REQUEST" });
    const { data } = await axios.post(`${baseURL}`, pet);
   
    dispatch({
      type: "PET_ADOPT_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "PET_ADOPT_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
