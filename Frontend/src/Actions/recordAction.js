import * as api from "../API/index";

import {
  START_LOADING,
  END_LOADING,
  GET_RECORD_BY_USER,
  GET_RECORDS,
  GET_RECORD,
  ADD_RECORD_BY_USER,
  COUNT_RECORDS,
  DELETE_RECORD,
  UPDATE_RECORD,
} from "../Constants/constants";

export const getRecords = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.getRecords();
    dispatch({ type: GET_RECORDS, payload: data });
    console.log("in get Records");
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const getRecord = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.getRecordsById(id);
    dispatch({ type: GET_RECORD, payload: { record: data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
export const getRecordsByUser = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.getRecordsByUser(id);
    //console.log(data);
    dispatch({ type: GET_RECORD_BY_USER, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
export const createRecord = (record) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.addRecords(record);
    dispatch({ type: ADD_RECORD_BY_USER, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
export const updateRecords = (id, record) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.updateRecords(id, record);
    dispatch({ type: UPDATE_RECORD, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
export const deleteRecords = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    await api.deleteRecords(id);
    dispatch({ type: DELETE_RECORD, payload: id });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
