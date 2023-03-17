import * as api from "../API/index";

export const signin = (formData) => async (dispatch) => {
  try {
    const { data } = await api.signin(formData);
    dispatch({ type: AUTH, payload: data });
    history.push("/dashboard");
  } catch (error) {
    console.log(error);
  }
};
export const signup = (formData, setLoading) => async (dispatch) => {
  try {
    const { data } = await api.signup(formData);
    dispatch({ type: AUTH, payload: data });
    const { info } = await api.createProfile({
      name: data?.result?.name,
    });
  } catch (error) {
    console.log(error);
    setLoading(false);
  }
};
