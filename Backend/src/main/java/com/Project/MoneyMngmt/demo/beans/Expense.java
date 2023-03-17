package com.Project.MoneyMngmt.demo.beans;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="Expense")
public class Expense {
	@Id
	@GeneratedValue(generator = "uuid")
	@GenericGenerator(name = "uuid", strategy = "uuid2")
	private String expenseId;
	private String expenseName;
	private String expenseDetails;
	private double expenseAmount;
	private String remarks;
	private String paymentMethod;
	private String categories;
	private Date expenseCreatedAt;
	
	@OneToOne(cascade = CascadeType.ALL, fetch=FetchType.EAGER)
	@JoinColumn(name = "profileId")
	@JsonIgnore
	private Profile profile;
	
	public Expense() {
		// TODO Auto-generated constructor stub
	}
	public Expense(String recordId, String recordName, String recordDetails, double recordAmount, String remarks,
			String paymentMethod, String categories, Date recordCreatedAt) {
		super();
		this.expenseId = recordId;
		this.expenseName = recordName;
		this.expenseDetails = recordDetails;
		this.expenseAmount = recordAmount;
		this.remarks = remarks;
		this.paymentMethod = paymentMethod;
		this.categories = categories;
		this.expenseCreatedAt = recordCreatedAt;
	}
	
	public Expense(String recordName, String recordDetails, double recordAmount, String remarks, String paymentMethod,
			String categories, Date recordCreatedAt) {
		super();
		this.expenseName = recordName;
		this.expenseDetails = recordDetails;
		this.expenseAmount = recordAmount;
		this.remarks = remarks;
		this.paymentMethod = paymentMethod;
		this.categories = categories;
		this.expenseCreatedAt = recordCreatedAt;
	}
	
	public Expense(String recordId, String recordName, String recordDetails, double recordAmount, String remarks,
			String paymentMethod, String categories, Date recordCreatedAt, Profile profile) {
		super();
		this.expenseId = recordId;
		this.expenseName = recordName;
		this.expenseDetails = recordDetails;
		this.expenseAmount = recordAmount;
		this.remarks = remarks;
		this.paymentMethod = paymentMethod;
		this.categories = categories;
		this.expenseCreatedAt = recordCreatedAt;
		this.profile = profile;
	}
	public Profile getProfile() {
		return profile;
	}
	public void setProfile(Profile profile) {
		this.profile = profile;
	}
	public String getRecordId() {
		return expenseId;
	}
	public void setRecordId(String recordId) {
		this.expenseId = recordId;
	}
	public String getRecordName() {
		return expenseName;
	}
	public void setRecordName(String recordName) {
		this.expenseName = recordName;
	}
	public String getRecordDetails() {
		return expenseDetails;
	}
	public void setRecordDetails(String recordDetails) {
		this.expenseDetails = recordDetails;
	}
	public double getRecordAmount() {
		return expenseAmount;
	}
	public void setRecordAmount(double recordAmount) {
		this.expenseAmount = recordAmount;
	}
	public String getRemarks() {
		return remarks;
	}
	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}
	public String getPaymentMethod() {
		return paymentMethod;
	}
	public void setPaymentMethod(String paymentMethod) {
		this.paymentMethod = paymentMethod;
	}
	public String getCategories() {
		return categories;
	}
	public void setCategories(String categories) {
		this.categories = categories;
	}
	public Date getRecordCreatedAt() {
		return expenseCreatedAt;
	}
	public void setRecordCreatedAt(Date recordCreatedAt) {
		this.expenseCreatedAt = recordCreatedAt;
	}
	@Override
	public String toString() {
		return "Records [recordId=" + expenseId + ", recordName=" + expenseName + ", recordDetails=" + expenseDetails
				+ ", recordAmount=" + expenseAmount + ", remarks=" + remarks + ", paymentMethod=" + paymentMethod
				+ ", categories=" + categories + ", recordCreatedAt=" + expenseCreatedAt + "]";
	}
	
	
}
