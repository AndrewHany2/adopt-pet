import axios from "axios";
const baseURL = "/api/pets";

export const getPets =
  (
    currentPage,
    filterByGender,
    filterByPet,
    filterByAge,
    filterByVaccinated,
    limit
  ) =>
  async (dispatch) => {
    let list = "";
    try {
      dispatch({ type: "PET_LIST_REQUEST" });
      if (filterByPet || filterByGender || filterByAge || filterByVaccinated) {
        const { data } = await axios.get(
          `${baseURL}?gender=${filterByGender}&petType=${filterByPet}&age=${filterByAge}&page=${currentPage}&vaccinated=${filterByVaccinated}&status=ACCEPTED`
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
    const header = {
      headers: {

        Authorization: userInfo.token,
      },
    };
    dispatch({ type: "PET_ADOPT_REQUEST" });
    const { data } = await axios.post(`${baseURL}`, pet);
    await axios.put(`/api/user/${userInfo.userId}`, {postedPets:data.petId},header);

    

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
