import {
  ADD_PROFILE,
  DELETE_PROFILE,
  END_LOADING,
  GET_PROFILE,
  GET_PROFILES,
  GET_PROFILE_BY_USER,
  START_LOADING,
  UPDATE_PROFILE,
  UPDATE_PROFILE_BY_USER,
} from "../Constants/constants";

const profileReducer = (state = { isLoading: true, profiles: [] }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case GET_PROFILE:
      return { ...state, profile: action.payload.profile };
    case GET_PROFILE_BY_USER:
      return { ...state, profiles: action.payload };
    case GET_PROFILES:
      return { ...state, profiles: action.payload.data };
    case ADD_PROFILE:
      return { ...state, profiles: action.payload };
    case UPDATE_PROFILE:
      return {
        ...state,
        profiles: state.profiles.map((profile) =>
          profile.profileId === action.payload.id ? action.payload : profile
        ),
      };
    case UPDATE_PROFILE_BY_USER:
        return {}
    case DELETE_PROFILE:
      return {
        ...state,
        profiles: state.profiles.filter(
          (profile) => profile.profileId !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default profileReducer;
