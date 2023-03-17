package com.Project.MoneyMngmt.demo.dto;

import org.springframework.web.bind.annotation.RequestParam;

public class ResetPasswordRequest {
	/**
	 * @RequestParam String emailId, @RequestParam String password, @RequestParam String otp 
	 */
	private String emailId;
	private String password;
	private String otp;
	public ResetPasswordRequest() {
		// TODO Auto-generated constructor stub
	}
	public ResetPasswordRequest(String emailId, String password, String otp) {
		super();
		this.emailId = emailId;
		this.password = password;
		this.otp = otp;
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
	public String getOtp() {
		return otp;
	}
	public void setOtp(String otp) {
		this.otp = otp;
	}
	@Override
	public String toString() {
		return "ResetPasswordRequest [emailId=" + emailId + ", password=" + password + ", otp=" + otp + "]";
	}
	
}
