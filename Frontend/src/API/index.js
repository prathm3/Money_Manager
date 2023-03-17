import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8080" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("user")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("user")).token
    }`;
  }

  return req;
});
//records
export const getRecords = () => API.get(`/records`);
export const getRecordsById = (id) => API.get(`/records/${id}`);
export const updateRecords = (id, record) =>
  API.patch(`/records/${id}`, record);
export const deleteRecords = (id) => API.delete(`/records/${id}`);
export const countOfRecords = () => API.get(`/records/count`);
export const addRecords = (record) =>
  API.post(`/records/user/6ced7285-7137-4f5e-ae04-b1d8878cb07f`, record);
export const getRecordsByUser = (id) => API.get(`/records/user/${id}`);

//expense
export const getExpense = () => API.get(`/expense`);
export const getExpenseById = (id) => API.get(`/expense/${id}`);
export const updateExpense = (id, record) =>
  API.patch(`/expense/${id}`, record);
export const deleteExpense = (id) => API.delete(`/expense/${id}`);
export const countOfExpense = () => API.get(`/expense/count`);
export const addExpense = (record) =>
  API.post(`/expense/user/6ced7285-7137-4f5e-ae04-b1d8878cb07f`, record);
export const getExpenseByUser = (id) => API.get(`/expense/user/${id}`);

//profiles
export const getProfile = (id) => API.get(`/profiles/${id}`);
export const getProfiles = () => API.get(`/profiles`);
export const updateProfile = (id, profile) =>
  API.patch(`/profiles/${id}`, profile);
export const addProfile = (profile) => API.post(`/profiles`, profile);
export const deleteProfile = (id) => API.delete(`/profiles/${id}`);
export const getProfileByUser = (id) => API.get(`/profiles/user/${id}`);
export const updateProfileByUser = (id, profile) =>
  API.get(`/profiles/user/${id}`, profile);

//user

export const signIn = (data) => API.post("/signin", data);
export const signUp = (data) => API.post("/signup", data);
export const forgot = (data) => API.post("/forgot", data);
export const reset = (data) => API.post("/reset", data);
export const signOut = () => API.get("/signout");
