package com.Project.MoneyMngmt.demo.dto;

import org.springframework.web.bind.annotation.RequestParam;

public class SignUpRequest {
	/**
	 * @RequestParam("emailId") String emailId,@RequestParam String password, @RequestParam String firstName, @RequestParam String lastName
	 */
	private String emailId;
	private String password;
	private String firstName;
	private String lastName;
	public SignUpRequest() {
		// TODO Auto-generated constructor stub
	}
	public SignUpRequest(String emailId, String password, String firstName, String lastName) {
		super();
		this.emailId = emailId;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
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
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	@Override
	public String toString() {
		return "SignUpRequest [emailId=" + emailId + ", password=" + password + ", firstName=" + firstName
				+ ", lastName=" + lastName + "]";
	}
	
}
