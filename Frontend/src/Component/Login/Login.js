import { Box, Button, CircularProgress, Link, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signin, signup } from "../../Actions/userAction";
import { addProfile } from "../../Actions/profileActions";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { SIGNIN } from "../../Constants/constants";

import { GoogleLogin } from "@react-oauth/google";
import { LoadingPage } from "./LoadingPage";

const intialStage = { emailId: "", password: "" };

function Login(props) {
  const [formData, setFormData] = useState(intialStage);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signin(formData));
    setLoading(true);
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const googleSuccess = async (res) => {
    console.log(res);
    const result = res?.profileObj;
    const token = res?.tokenId;
    dispatch(
      addProfile({
        firstName: result?.name,
        lastName: "",
        bio: "",
        emailId: result?.email,
        city: "",
        country: "",
        dob: "",
      })
    );

    try {
      dispatch({ type: SIGNIN, data: { result, token } });

      window.location.href = "/dashboard";
    } catch (error) {
      console.log(error);
    }
  };
  const googleError = (error) => {
    console.log(error);
    console.log("Google Sign In was unseccassful. Try again later");
  };
  const handleForgot = () => {
    window.location.href = "/forgot";
  };
  const handleSign = () => {
    window.location.href = "/signup";
  };

  return (
    <div className="auth-form-container">
      <Box
        alignItems="center"
        justifyContent="space-between"
        sx={{
          mx: "auto",
          width: 700,
          height: 600,
          p: 10,
          ml: 50,
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
        <Typography paddingBottom={5}>Login In </Typography>
        <form
          className="login-form"
          onSubmit={handleSubmit}
          style={{ justifyContent: "space-between" }}
        >
          <label htmlFor="email">Email Id</label>
          <input
            className="form-control"
            type="email"
            placeholder="yourmail@domain.com"
            id="email"
            name="emailId"
            onChange={handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            className="form-control"
            type="password"
            placeholder="********"
            id="password"
            name="password"
            onChange={handleChange}
          />
          <br />
          <table className="d-flex justify-content-center">
            <tbody>
              <tr>
                <td>
                  {loading ? (
                    <CircularProgress color="secondary" />
                  ) : (
                    <button className="btn btn-primary" type="submit">
                      Sign In
                    </button>
                  )}
                  <GoogleOAuthProvider clientId="89722346030-1agaa92j63ih8dblir5ngbspmca09faq.apps.googleusercontent.com">
                    <GoogleLogin
                      onSuccess={googleSuccess}
                      onError={googleError}
                    />
                  </GoogleOAuthProvider>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
        <br />

        <Button onClick={handleForgot}>ForGot PassWord</Button>

        <Button onClick={handleSign}>Dont Have Account? Sign UP</Button>
      </Box>
    </div>
  );
}

export default Login;
