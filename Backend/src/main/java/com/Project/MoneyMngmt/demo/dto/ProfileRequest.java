package com.Project.MoneyMngmt.demo.dto;

import java.util.Date;


public class ProfileRequest {
	/*
	 * @RequestParam String firstName, @RequestParam String lastName, @RequestParam String bio,
	 *  @RequestParam String emailId, @RequestParam String city, @RequestParam String country, @RequestParam Date dob
	 */
	private String firstName;
	private String lastName;
	private String bio;
	private String emailId;
	private String city;
	private String country;
	private Date dob;
	public ProfileRequest() {
		// TODO Auto-generated constructor stub
	}
	public ProfileRequest(String firstName, String lastName, String bio, String emailId, String city, String country,
			Date dob) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.bio = bio;
		this.emailId = emailId;
		this.city = city;
		this.country = country;
		this.dob = dob;
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
	public String getBio() {
		return bio;
	}
	public void setBio(String bio) {
		this.bio = bio;
	}
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public Date getDob() {
		return dob;
	}
	public void setDob(Date dob) {
		this.dob = dob;
	}
	@Override
	public String toString() {
		return "ProfileRequest [firstName=" + firstName + ", lastName=" + lastName + ", bio=" + bio + ", emailId="
				+ emailId + ", city=" + city + ", country=" + country + ", dob=" + dob + "]";
	}
	
	
}
