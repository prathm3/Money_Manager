package com.Project.MoneyMngmt.demo.dto;

import java.util.List;

public class JwtResponse {
	private String token;
	private String type = "Bearer";
	private String refreshToken;
	private String username;

	public JwtResponse() {
		// TODO Auto-generated constructor stub
	}

	public JwtResponse(String token, String refreshToken, String username) {
		super();
		this.token = token;
		this.refreshToken = refreshToken;
		this.username = username;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getRefreshToken() {
		return refreshToken;
	}

	public void setRefreshToken(String refreshToken) {
		this.refreshToken = refreshToken;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	@Override
	public String toString() {
		return "JwtResponse [token=" + token + ", type=" + type + ", refreshToken=" + refreshToken + ", username="
				+ username + "]";
	} 
}