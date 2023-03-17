import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../../Actions/userAction";
const intialStage = {emailId:"", password:"",confirmpassword:"", firstName:"", lastName:""}


function Register() {
    const [formData, setFormData] = useState(intialStage);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(formData.password === formData.confirmpassword){
            const data = {emailId: formData.emailId, password: formData.password, firstName:formData.firstName, lastName:formData.lastName}
            dispatch(signup(data));
        }else{
            console.log("password does not matched");

        }

    }
    const handleLogin = () =>{
        window.location.href ="/login"
      }
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
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
          fontSize: "0.875rem",
          fontWeight: "700",
        }}
      >
        <Typography paddingBottom={5}>Sign Up </Typography>
        <div className="auth-form-container">
            <form className="register-form" onSubmit={handleSubmit}>
                <label>First Name</label>
                <input type="text" className="form-control"  onChange={handleChange} name="firstName" placeholder="First Name"/>
                <br/>
                <label>Last Name</label>
                <input type="text" className="form-control" onChange={handleChange} name="lastName" placeholder="Last Name"/>
                <br/>
                <label htmlFor="email">Email Id</label>
                <input type="email" className="form-control" onChange={handleChange} placeholder="yourmail@domain.com" id="email" name="emailId"/>
                <br/>
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" onChange={handleChange} placeholder="********" id="password" name="password"/>
                <br/>
                <label htmlFor="password">Confirm Password</label>
                <input type="password" className="form-control"  onChange={handleChange} placeholder="********" id="password" name="confirmpassword"/>
                <br/>
                <Button type="submit" varient="contained" >Sign Up</Button>
            </form>
            <br/>
            <Button variant="contained" onClick={handleLogin} > Back to Login Page</Button>
            <br/>
        </div>
        </Box>
    )
}

export default Register