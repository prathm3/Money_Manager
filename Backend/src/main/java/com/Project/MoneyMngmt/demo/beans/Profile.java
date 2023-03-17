package com.Project.MoneyMngmt.demo.beans;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="Profile")
public class Profile {
	
	@Id
	@GeneratedValue(generator = "uuid")
	@GenericGenerator(name = "uuid", strategy = "uuid2")
	private String profileId;
	private String firstName;
	private String lastName;
	private String emailID;
	private Date dateOfBirth;
	private String country;
	private String city;
	private String bio;
	//user
	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
	@OneToOne(mappedBy = "profile", cascade = CascadeType.ALL, fetch = FetchType.LAZY )
	private User user;
	
	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
	@OneToMany(mappedBy = "profile", cascade = CascadeType.ALL, fetch=FetchType.EAGER)
	private Set<Records> records = new HashSet<>();
	
	public Profile() {
		// TODO Auto-generated constructor stub
	}
	public Profile(String profileId, String firstName, String lastName, String emailID, Date dateOfBirth,
			String country, String city, String bio) {
		super();
		this.profileId = profileId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.emailID = emailID;
		this.dateOfBirth = dateOfBirth;
		this.country = country;
		this.city = city; 
		this.bio = bio;
	}
	public Profile(String firstName, String lastName, String emailID, Date dateOfBirth, String country, String city,
			String bio) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.emailID = emailID;
		this.dateOfBirth = dateOfBirth;
		this.country = country;
		this.city = city;
		this.bio = bio;
	}
	
	public Profile(String profileId, String firstName, String lastName, String emailID, Date dateOfBirth,
			String country, String city, String bio, User user) {
		super();
		this.profileId = profileId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.emailID = emailID;
		this.dateOfBirth = dateOfBirth;
		this.country = country;
		this.city = city;
		this.bio = bio;
		this.user = user;
	}
	
	public Profile(String profileId, String firstName, String lastName, String emailID, Date dateOfBirth,
			String country, String city, String bio, User user, Set<Records> records) {
		super();
		this.profileId = profileId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.emailID = emailID;
		this.dateOfBirth = dateOfBirth;
		this.country = country;
		this.city = city;
		this.bio = bio;
		this.user = user;
		this.records = records;
	}
	public Set<Records> getRecords() {
		return records;
	}
	public void setRecords(Set<Records> records) {
		this.records = records;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public String getProfileId() {
		return profileId;
	}
	public void setProfileId(String profileId) {
		this.profileId = profileId;
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
	public String getEmailID() {
		return emailID;
	}
	public void setEmailID(String emailID) {
		this.emailID = emailID;
	}
	public Date getDateOfBirth() {
		return dateOfBirth;
	}
	public void setDateOfBirth(Date dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getBio() {
		return bio;
	}
	public void setBio(String bio) {
		this.bio = bio;
	}
	@Override
	public String toString() {
		return "Profile [profileId=" + profileId + ", firstName=" + firstName + ", lastName=" + lastName + ", emailID="
				+ emailID + ", dateOfBirth=" + dateOfBirth + ", country=" + country + ", city=" + city + ", bio=" + bio
				+ "]";
	}
	
}
