//package com.Project.MoneyMngmt.demo.beans;
//
//import java.time.Instant;
//
//import javax.persistence.*;
//
//@Entity(name = "refreshtoken")
//public class RefreshToken {
//	@Id
//	@GeneratedValue(strategy = GenerationType.AUTO)
//	private long id;
//
//	@OneToOne
//	@JoinColumn(name = "userid", referencedColumnName = "id")
//	private User user;
//
//	@Column(nullable = false, unique = true)
//	private String token;
//
//	@Column(nullable = false)
//	private Instant expiryDate;
//
//	//getters and setters
//	public RefreshToken() {
//		// TODO Auto-generated constructor stub
//	}
//
//	public RefreshToken(long id, User user, String token, Instant expiryDate) {
//		super();
//		this.id = id;
//		this.user = user;
//		this.token = token;
//		this.expiryDate = expiryDate;
//	}
//
//	public long getId() {
//		return id;
//	}
//
//	public void setId(long id) {
//		this.id = id;
//	}
//
//	public User getUser() {
//		return user;
//	}
//
//	public void setUser(User user) {
//		this.user = user;
//	}
//
//	public String getToken() {
//		return token;
//	}
//
//	public void setToken(String token) {
//		this.token = token;
//	}
//
//	public Instant getExpiryDate() {
//		return expiryDate;
//	}
//
//	public void setExpiryDate(Instant expiryDate) {
//		this.expiryDate = expiryDate;
//	}
//
//	@Override
//	public String toString() {
//		return "RefreshToken [id=" + id + ", user=" + user + ", token=" + token + ", expiryDate=" + expiryDate + "]";
//	}
//	
//
//
//}