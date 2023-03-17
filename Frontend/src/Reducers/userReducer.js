import { SIGNIN, SIGNOUT, SIGNUP, FORGOT, RESET } from "../Constants/constants";

const userReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case SIGNIN:
      localStorage.setItem("user", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action?.data };
    case SIGNOUT:
      localStorage.removeItem("user");
      return { ...state, authData: null };
    case SIGNUP:
      localStorage.setItem("user", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action?.data };
    default:
      return state;
  }
};

export default userReducer;
