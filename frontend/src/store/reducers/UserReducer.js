export const getUserReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_REQUEST":
      return { loading: true, ...state };
    case "USER_SUCCESS":
      return {
        ...state,
        loading: false,
        User: action.payload,
      };
    case "USER_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
