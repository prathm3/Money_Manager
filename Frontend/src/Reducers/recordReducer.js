import {
  START_LOADING,
  END_LOADING,
  GET_RECORDS,
  GET_RECORD,
  GET_RECORD_BY_USER,
  UPDATE_RECORD,
  ADD_RECORD_BY_USER,
  DELETE_RECORD,
  COUNT_RECORDS,
} from "../Constants/constants.js";

const recordReducer = (state = { isLoading: true, records: [] }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case GET_RECORDS:
      return { ...state, records: action.payload.data };
    case GET_RECORD:
      return { ...state, record: action.payload.record };
    case GET_RECORD_BY_USER:
      return {
        ...state,
        records: action.payload,
      };
    case ADD_RECORD_BY_USER:
      return { ...state, records: action.payload };
    case UPDATE_RECORD:
      return {
        ...state,
        records: state.records.map((record) =>
          record.recordId === action.payload.id ? action.payload : record
        ),
      };
    case DELETE_RECORD:
      return {
        ...state,
        records: state.records.filter(
          (record) => record.recordId !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default recordReducer;
