import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSnackbar } from "react-simple-snackbar";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { Avatar, Button, Paper, Grid, Container } from "@material-ui/core";
import {
  getProfileByUser,
  updateProfile,
  updateProfileByUser,
} from "../../Actions/profileActions";
import useStyles from "./Styles";
import Input from "./Input";
import ReactCountryFlag from "react-country-flag";
import Select from "react-select";
import countryList from "react-select-country-list";
import ProfileDetail from "./ProfileDetails";
import { Box } from "@mui/system";

const Settings = () => {
  // const user = JSON.parse(localStorage.getItem("profile"));
  const initialState = {
    firstName: "",
    lastName: "",
    bio: "",
    emailID: "",
    city: "",
    country: "",
    dateOfBirth: "",
  };

  const [form, setForm] = useState(initialState);
  const location = useLocation();
  const dispatch = useDispatch();

  const classes = useStyles();
  const { profiles } = useSelector((state) => state.profileReducer);

  const [switchEdit, setSwitchEdit] = useState(0);

  // const [openSnackbar, closeSnackbar] = useSnackbar();
  const user = JSON.parse(localStorage.getItem("user"));
  if (user === null) {
    window.location.href = "/login";
  }
  const id = user.userId;
  useEffect(() => {
    if (switchEdit === 1) {
      setForm(profiles);
    }
  }, [profiles, switchEdit]);

  useEffect(() => {
    dispatch(getProfileByUser(id));
  }, [id, location, switchEdit, dispatch]);

  //localStorage.setItem("profileDetail", JSON.stringify({ ...profiles }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(updateProfileByUser(id, form));
    setSwitchEdit(0);
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <Box
      alignItems="center"
      justifyContent="space-between"
      sx={{
        mx: "auto",
        width: 700,
        height: 900,
        p: 10,
        ml: 20,
        mb: 10,
        mt: 20,
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#101010" : "grey.50",
        color: (theme) =>
          theme.palette.mode === "dark" ? "grey.300" : "grey.800",
        border: "1px solid",
        borderColor: (theme) =>
          theme.palette.mode === "dark" ? "grey.800" : "grey.300",
        borderRadius: 2,
        textAlign: "center",
        fontSize: "0.875rem",
        fontWeight: "700",
      }}
    >
      <div>
        {switchEdit === 0 && (
          <Container component="main" maxWidth="sm">
            <Paper className={classes.paper} elevation={0}>
              <ProfileDetail profiles={profiles} />
              <Button
                variant="outlined"
                style={{ margin: "30px", padding: "15px 30px" }}
                onClick={() => setSwitchEdit(1)}
              >
                Edit Profile
              </Button>
            </Paper>
          </Container>
        )}

        {switchEdit === 1 && (
          <Container component="main" maxWidth="sm">
            <Paper className={classes.paper} elevation={1}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderBottom: "solid 1px #dddddd",
                  paddingBottom: "20px",
                }}
              >
                <Avatar
                  style={{ width: "100px", height: "100px" }}
                  alt=""
                  className={classes.avatar}
                />
              </div>
              <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  {/* <Uploader form={form} setForm={setForm} /> */}
                  <Input
                    name="emailID"
                    label="Email Address"
                    handleChange={handleChange}
                    type="email"
                    half
                    value={form?.emailID}
                  />
                  <Input
                    name="firstName"
                    label="First Name"
                    handleChange={handleChange}
                    type="text"
                    half
                    value={form?.firstName}
                  />
                  <Input
                    name="lastName"
                    label="Last Name"
                    handleChange={handleChange}
                    type="text"
                    value={form?.lastName}
                  />
                  <Input
                    name="country"
                    label="Country"
                    handleChange={handleChange}
                    type="text"
                    value={form?.country}
                  />
                  <Input
                    name="city"
                    label="City "
                    handleChange={handleChange}
                    type="text"
                    value={form?.city}
                  />
                  <Input
                    name="bio"
                    label="Bio "
                    handleChange={handleChange}
                    type="text"
                    multiline
                    rows="4"
                    value={form?.bio}
                  />
                  <Input
                    name="dateOfBirth"
                    label="Date of Birth"
                    handleChange={handleChange}
                    type="date"
                    value={form?.dateOfBirth}
                  />
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Update Settings
                </Button>
                <Grid container justifyContent="flex-end"></Grid>
              </form>
            </Paper>
          </Container>
        )}
      </div>
    </Box>
  );
};

export default Settings;
