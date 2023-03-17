import { Button, CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { forgot } from "../../Actions/userAction";
import { LoadingPage } from "./LoadingPage";


const initialStage = {emailId: ""};
export const ForgotPass = (props) => {
    const [formData, setFormData] = useState(initialStage);
    const[loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(forgot(formData));
        setLoading(true)
    }
    const handleChange = (e) => {
      setFormData({...formData, [e.target.name]: e.target.value})

  }
  const handleLogin = () =>{
    window.location.href ="/login"
  }
    return (
        
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
          borderColor: 'error.main',
          fontSize: "0.875rem",
          fontWeight: "700",
        }}
      >
        <Typography paddingBottom={5}> ForGot Password </Typography>
            <form className="forgot-password-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email Id</label>
                <input className="form-control" type="email" placeholder="yourmail@domain.com" id="email" name="emailId" onChange={handleChange} />
                <br/>
                <table className="d-flex justify-content-center">
                  <tbody>
                  <tr>
                    <td>
                    {loading ? <CircularProgress color="secondary" /> : <Button variant="contained" type="submit">Reset Password</Button>}
                    </td>
                  </tr>
                  
                  </tbody>
                </table>
            </form>
            <br/>
            <Button variant="contained" onClick={handleLogin} > Back to Login Page</Button>
            </Box>
        
    )
}
