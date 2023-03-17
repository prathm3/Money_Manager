import * as api from "../API/index";
import { SIGNIN, SIGNOUT, SIGNUP, FORGOT, RESET } from "../Constants/constants";

export const signin = (formdata) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formdata);
    dispatch({ type: SIGNIN, data });
    window.location.href = "/reports";
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formdata) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formdata);
    dispatch({ type: SIGNIN, data });

    window.location.href = "/reports";
  } catch (error) {
    console.log(error);
  }
};
export const forgot = (formdata) => async (dispatch) => {
  try {
    console.log("in forgot before " + formdata);
    await api.forgot(formdata);
    console.log("in forgot after " + formdata);
    //dispatch({ type: SIGNIN, data });
    window.location.href = "/reset";
  } catch (error) {
    console.log(error);
  }
};

export const reset = (formdata) => async (dispatch) => {
  try {
    await api.reset(formdata);
    //dispatch({ type: SIGNIN, data });
    window.location.href = "/login";
  } catch (error) {
    console.log(error);
  }
};
