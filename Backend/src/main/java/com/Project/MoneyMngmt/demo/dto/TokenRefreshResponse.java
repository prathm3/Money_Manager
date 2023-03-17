package com.Project.MoneyMngmt.demo.dto;

public class TokenRefreshResponse {
	private String accessToken;
	private String refreshToken;
	private String tokenType = "Bearer";

	public TokenRefreshResponse(String accessToken, String refreshToken) {
		this.accessToken = accessToken;
		this.refreshToken = refreshToken;
	}
	public TokenRefreshResponse() {
		// TODO Auto-generated constructor stub
	}
	public TokenRefreshResponse(String accessToken, String refreshToken, String tokenType) {
		super();
		this.accessToken = accessToken;
		this.refreshToken = refreshToken;
		this.tokenType = tokenType;
	}
	public String getAccessToken() {
		return accessToken;
	}
	public void setAccessToken(String accessToken) {
		this.accessToken = accessToken;
	}
	public String getRefreshToken() {
		return refreshToken;
	}
	public void setRefreshToken(String refreshToken) {
		this.refreshToken = refreshToken;
	}
	public String getTokenType() {
		return tokenType;
	}
	public void setTokenType(String tokenType) {
		this.tokenType = tokenType;
	}
	@Override
	public String toString() {
		return "TokenRefreshResponse [accessToken=" + accessToken + ", refreshToken=" + refreshToken + ", tokenType="
				+ tokenType + "]";
	}

	// getters and setters
	
}
