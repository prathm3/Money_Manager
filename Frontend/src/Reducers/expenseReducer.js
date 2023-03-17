import {
  START_LOADING,
  END_LOADING,
  GET_EXPENSES,
  GET_EXPENSE,
  GET_EXPENSE_BY_USER,
  UPDATE_EXPENSE,
  ADD_EXPENSE_BY_USER,
  DELETE_EXPENSE,
  COUNT_EXPENSES,
} from "../Constants/constants.js";

const expenseReducer = (state = { isLoading: true, expenses: [] }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoadingg: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case GET_EXPENSES:
      return { ...state, expenses: action.payload.data };
    case GET_EXPENSE:
      return { ...state, expense: action.payload.expense };
    // case GET_EXPENSE_BY_USER:
    //   return {
    //     ...state,
    //     expenses: action.payload,
    //   };
    case ADD_EXPENSE_BY_USER:
      return { ...state, expenses: action.payload };
    case UPDATE_EXPENSE:
      return {
        ...state,
        expenses: state.expenses.map((expense) =>
          expense.expenseId === action.payload.id ? action.payload : expense
        ),
      };
    case DELETE_EXPENSE:
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.expenseId !== action.payload.id
        ),
      };
    case GET_EXPENSE_BY_USER:
      return { ...state, expenses: action.payload };
    default:
      return state;
  }
};

export default expenseReducer;
