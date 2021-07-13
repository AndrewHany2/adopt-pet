export const petListReducer = (state = {}, action) => {
  switch (action.type) {
    case "PET_LIST_REQUEST":
      return { loading: true };
    case "PET_LIST_SUCCESS":
      return {
        loading: false,
        info: action.payload,
      };
    case "PET_LIST_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const petInfoReducer = (state = {}, action) => {
  switch (action.type) {
    case "PET_INFO_REQUEST":
      return { loading: true };
    case "PET_INFO_SUCCESS":
      return {
        loading: false,
        info: action.payload,
      };
    case "PET_INFO_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const postPetReducer = (state = {}, action) => {
  switch (action.type) {
    case "PET_ADOPT_REQUEST":
      return { loading: true, ...state };
    case "PET_ADOPT_SUCCESS":
      return {
        loading: false,
        list: action.payload,
      };
    case "PET_ADOPT_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};