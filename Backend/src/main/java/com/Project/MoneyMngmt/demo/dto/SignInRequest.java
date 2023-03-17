package com.Project.MoneyMngmt.demo.dto;

import org.springframework.web.bind.annotation.RequestParam;

public class SignInRequest {
	/**
	 * @RequestParam String emailId, @RequestParam String password
	 */
	private String emailId;
	private String password;
	public SignInRequest() {
		// TODO Auto-generated constructor stub
	}
	public SignInRequest(String emailId, String password) {
		super();
		this.emailId = emailId;
		this.password = password;
	}
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@Override
	public String toString() {
		return "SignInRequest [emailId=" + emailId + ", password=" + password + "]";
	}
	

}
