import {
  START_LOADING,
  END_LOADING,
  ADD_PROFILE,
  DELETE_PROFILE,
  UPDATE_PROFILE,
  GET_PROFILE,
  GET_PROFILES,
  GET_PROFILE_BY_USER,
  UPDATE_PROFILE_BY_USER,
} from "../Constants/constants";
import * as api from "../API/index";

export const getProfile = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.getProfile(id);
    dispatch({ type: GET_PROFILE, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
export const getProfiles = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.getProfile();
    dispatch({ type: GET_PROFILES, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
export const addProfile = (profile) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.addProfile(profile);
    dispatch({ type: ADD_PROFILE, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
export const updateProfile = (id, profile) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.updateProfile(id, profile);
    dispatch({ type: UPDATE_PROFILE, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
export const deleteProfile = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    await api.deleteProfile(id);
    dispatch({ type: DELETE_PROFILE, payload: id });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
export const getProfileByUser = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.getProfileByUser(id);
    dispatch({ type: GET_PROFILE_BY_USER, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
export const updateProfileByUser = (id, profile) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.updateProfileByUser(id, profile);
    dispatch({ type: UPDATE_PROFILE_BY_USER, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
