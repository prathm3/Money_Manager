package com.Project.MoneyMngmt.demo.beans;

import java.util.Collection;
import java.util.Date;
import java.util.regex.Pattern;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern.Flag;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.validator.constraints.Email;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name= "User")
public class User implements UserDetails {
	@Id
	@NotNull
	@GeneratedValue(strategy = GenerationType.AUTO,generator = "uuid")
	@GenericGenerator(name = "uuid", strategy = "uuid2")
	@Column(name="user_id" , columnDefinition="default 'defaultAdmin'")
	private String UserId;
	//@Column(name = "firstName")
	private String FirstName;
	//@Column(name="LastName")
	private String LastName;
	//@Column(name="emailid")
	@NotEmpty
	@Email(regexp = "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}", flags = Flag.CASE_INSENSITIVE)
	private String emailID;
	@NotEmpty
	//@Column(name="password")
	private String Password;
	//@Column(name="resetToken")
	private String resetToken;
	//@Column(name="expiresIn")
	private Date expiresIn;
	@JsonIgnore
	@OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JoinColumn(name="profileId")
	private Profile profile;
	
	public User() {
		// TODO Auto-generated constructor stub
	}
	public User(String userId, String firstName, String lastName, String emailID, String password, String resetToken,
			Date expiresIn) {
		super();
		UserId = userId;
		FirstName = firstName;
		LastName = lastName;
		this.emailID = emailID;
		Password = password;
		this.resetToken = resetToken;
		this.expiresIn = expiresIn;
	}
	public User(String userId, String firstName, String lastName, String emailID, String password) {
		super();
		UserId = userId;
		FirstName = firstName;
		LastName = lastName;
		this.emailID = emailID;
		Password = password;
	}
	
	public User(@NotNull String userId, String firstName, String lastName,
			@NotEmpty @Email(regexp = "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}", flags = Flag.CASE_INSENSITIVE) String emailID,
			@NotEmpty String password, String resetToken, Date expiresIn, Profile profile) {
		super();
		UserId = userId;
		FirstName = firstName;
		LastName = lastName;
		this.emailID = emailID;
		Password = password;
		this.resetToken = resetToken;
		this.expiresIn = expiresIn;
		this.profile = profile;
	}
	public Profile getProfile() {
		return profile;
	}
	public void setProfile(Profile profile) {
		this.profile = profile;
	}
	public String getUserId() {
		return UserId;
	}
	public String getFirstName() {
		return FirstName;
	}
	public void setFirstName(String firstName) {
		FirstName = firstName;
	}
	public String getLastName() {
		return LastName;
	}
	public void setLastName(String lastName) {
		LastName = lastName;
	}
	public String getEmailID() {
		return emailID;
	}
	public void setEmailID(String emailID) {
		this.emailID = emailID;
	}
	public String getPassword() {
		return Password;
	}
	public void setPassword(String password) {
		Password = password;
	}
	public String getResetToken() {
		return resetToken;
	}
	public void setResetToken(String resetToken) {
		this.resetToken = resetToken;
	}
	public Date getExpiresIn() {
		return expiresIn;
	}
	public void setExpiresIn(Date date) {
		this.expiresIn = date;
	}
	@Override
	public String toString() {
		return "User [UserId=" + UserId + ", FirstName=" + FirstName + ", LastName=" + LastName + ", EmailID=" + emailID
				+ ", Password=" + Password + ", resetToken=" + resetToken + ", expiresIn=" + expiresIn + "]";
	}
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return emailID;
	}
	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}
	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}
	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}
	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return true;
	}
	
	
	
}
