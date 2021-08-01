export const UserLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_LOGIN_REQUEST":
    case "USER_LOGIN_GOOGLE_REQUEST":
    case "USER_LOGIN_FACEBOOK_REQUEST":
      return { loading: true, ...state };
    case "USER_LOGIN_SUCCESS":
    case "USER_LOGIN_GOOGLE_SUCCESS":
    case "USER_LOGIN_FACEBOOK_SUCCESS":
      return {
        loading: false,
        success: true,
        info: action.payload,
      };
    case "USER_LOGIN_FAIL":
    case "USER_LOGIN_GOOGLE_FAIL":
    case "USER_LOGIN_FACEBOOK_FAIL":
      return { loading: false, error: action.payload };
    case "USER_LOGOUT":
      return {};
    default:
      return state;
  }
};
export const getUserReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_DATA_REQUEST":
      return { loading: true };
    case "USER_DATA_SUCCESS":
      return {
        ...state,

        loading: false,
        success: true,
        info: action.payload,
      };
    case "USER_DATA_FAIL":
      return { loading: false, error: action.payload };
    case "USER_DATA_RESET":
      return {};
    default:
      return state;
  }
};

export const UserRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_REGISTER_REQUEST":
      return { loading: true, ...state };
    case "USER_REGISTER_SUCCESS":
      return {
        loading: false,
        success: true,
        info: action.payload,
      };
    case "USER_REGISTER_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case "PET_USER_PROFILE_REQUEST":
      return { loading: true, ...state };
    case "PET_USER_PROFILE_SUCCESS":
      return {
        loading: false,
        success: true,
        userInfo: action.payload.userData,
        petsInfo: action.payload.petsData,
      };
    case "PET_USER_PROFILE_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
