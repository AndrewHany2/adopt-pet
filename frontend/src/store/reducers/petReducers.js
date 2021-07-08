export const petListReducer = (state = { pets: [] }, action) => {
  switch (action.type) {
    case "PET_LIST_REQUEST":
      return { loading: true, pets: [] };
    case "PET_LIST_SUCCESS":
      return {
        loading: false,
        pets: action.payload.pets,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case "PET_LIST_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};