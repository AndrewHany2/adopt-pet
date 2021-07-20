export const UserLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_LOGIN_REQUEST":
      return { loading: true, ...state };
    case "USER_LOGIN_SUCCESS":
      return {
        loading: false,
        success: true,
        info: action.payload,
      };
    case "USER_LOGIN_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
