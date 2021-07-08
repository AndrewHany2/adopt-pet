export const petListReducer = (state = { pets: [] }, action) => {
  switch (action.type) {
    case "PET_LIST_REQUEST":
      return { loading: true, pets: [] };
    case "PET_LIST_SUCCESS":
      return {
        loading: false,
        pets: action.payload,
      };
    case "PET_LIST_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
