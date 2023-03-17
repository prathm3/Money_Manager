package com.Project.MoneyMngmt.demo.dto;

public class ForgotPasswordRequest {
	private String emailId;
	public ForgotPasswordRequest() {
		// TODO Auto-generated constructor stub
	}
	public ForgotPasswordRequest(String emailId) {
		super();
		this.emailId = emailId;
	}
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	@Override
	public String toString() {
		return "ForgotPasswordRequest [emailId=" + emailId + "]";
	}
	
}
