package com.Project.MoneyMngmt.demo.dto;

import java.io.Serializable;

public class AuthenticationResponse implements Serializable {

    private final String jwt;
    private  String userId;
    public AuthenticationResponse(String jwt) {
        this.jwt = jwt;
    }
    public AuthenticationResponse(String jwt, String userId) {
        this.jwt = jwt;
        this.userId = userId;
    }

    public String getJwt() {
        return jwt;
    }

	public String getUserId() {
		return userId;
	}
    
}
