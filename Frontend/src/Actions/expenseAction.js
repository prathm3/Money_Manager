import * as api from "../API/index";

import {
  START_LOADING,
  END_LOADING,
  GET_EXPENSE_BY_USER,
  GET_EXPENSES,
  GET_EXPENSE,
  ADD_EXPENSE_BY_USER,
  COUNT_RECORDS,
  DELETE_EXPENSE,
  UPDATE_EXPENSE,
} from "../Constants/constants";

export const getExpenses = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.getExpense();
    dispatch({ type: GET_EXPENSES, payload: data });
    console.log("in get Records");
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const getExpense = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.getExpenseById(id);
    dispatch({ type: GET_EXPENSE, payload: { record: data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
// export const getExpensesByUser = (id) => async (dispatch) => {
//   try {
//     dispatch({ type: START_LOADING });
//     const { data } = await api.getExpenseByUser(id);
//     //console.log(data);
//     dispatch({ type: GET_EXPENSE_BY_USER, payload: data });
//     dispatch({ type: END_LOADING });
//   } catch (error) {
//     console.log(error);
//   }
// };
export const createExpense = (record) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.addExpense(record);
    dispatch({ type: ADD_EXPENSE_BY_USER, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
export const updateExpenses = (id, record) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.updateExpense(id, record);
    dispatch({ type: UPDATE_EXPENSE, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
export const deleteExpenses = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    await api.deleteExpense(id);
    dispatch({ type: DELETE_EXPENSE, payload: id });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
export const getExpensesByUser = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.getExpenseByUser(id);
    dispatch({ type: GET_EXPENSE_BY_USER, payload: data });
    console.log(data);
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log();
  }
};
