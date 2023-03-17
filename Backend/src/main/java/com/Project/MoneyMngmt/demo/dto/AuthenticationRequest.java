package com.Project.MoneyMngmt.demo.dto;


import java.io.Serializable;

public class AuthenticationRequest implements Serializable {


    private String emailId;
    private String password;

    public String getUsername() {
        return emailId;
    }

    public void setUsername(String username) {
        this.emailId = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    //need default constructor for JSON Parsing
    public AuthenticationRequest()
    {

    }

    public AuthenticationRequest(String username, String password) {
        this.setUsername(username);
        this.setPassword(password);
    }
}
