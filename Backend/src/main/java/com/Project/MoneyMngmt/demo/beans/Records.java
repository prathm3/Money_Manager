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
@Table(name="Records")
public class Records {
	@Id
	@GeneratedValue(generator = "uuid")
	@GenericGenerator(name = "uuid", strategy = "uuid2")
	private String recordId;
	private String recordName;
	private String recordDetails;
	private double recordAmount;
	private String remarks;
	private String paymentMethod;
	private String categories;
	private Date recordCreatedAt;
	
	@OneToOne(cascade = CascadeType.ALL, fetch=FetchType.EAGER)
	@JoinColumn(name = "profileId")
	@JsonIgnore
	private Profile profile;
	
	public Records() {
		// TODO Auto-generated constructor stub
	}
	public Records(String recordId, String recordName, String recordDetails, double recordAmount, String remarks,
			String paymentMethod, String categories, Date recordCreatedAt) {
		super();
		this.recordId = recordId;
		this.recordName = recordName;
		this.recordDetails = recordDetails;
		this.recordAmount = recordAmount;
		this.remarks = remarks;
		this.paymentMethod = paymentMethod;
		this.categories = categories;
		this.recordCreatedAt = recordCreatedAt;
	}
	
	public Records(String recordName, String recordDetails, double recordAmount, String remarks, String paymentMethod,
			String categories, Date recordCreatedAt) {
		super();
		this.recordName = recordName;
		this.recordDetails = recordDetails;
		this.recordAmount = recordAmount;
		this.remarks = remarks;
		this.paymentMethod = paymentMethod;
		this.categories = categories;
		this.recordCreatedAt = recordCreatedAt;
	}
	
	public Records(String recordId, String recordName, String recordDetails, double recordAmount, String remarks,
			String paymentMethod, String categories, Date recordCreatedAt, Profile profile) {
		super();
		this.recordId = recordId;
		this.recordName = recordName;
		this.recordDetails = recordDetails;
		this.recordAmount = recordAmount;
		this.remarks = remarks;
		this.paymentMethod = paymentMethod;
		this.categories = categories;
		this.recordCreatedAt = recordCreatedAt;
		this.profile = profile;
	}
	public Profile getProfile() {
		return profile;
	}
	public void setProfile(Profile profile) {
		this.profile = profile;
	}
	public String getRecordId() {
		return recordId;
	}
	public void setRecordId(String recordId) {
		this.recordId = recordId;
	}
	public String getRecordName() {
		return recordName;
	}
	public void setRecordName(String recordName) {
		this.recordName = recordName;
	}
	public String getRecordDetails() {
		return recordDetails;
	}
	public void setRecordDetails(String recordDetails) {
		this.recordDetails = recordDetails;
	}
	public double getRecordAmount() {
		return recordAmount;
	}
	public void setRecordAmount(double recordAmount) {
		this.recordAmount = recordAmount;
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
		return recordCreatedAt;
	}
	public void setRecordCreatedAt(Date recordCreatedAt) {
		this.recordCreatedAt = recordCreatedAt;
	}
	@Override
	public String toString() {
		return "Records [recordId=" + recordId + ", recordName=" + recordName + ", recordDetails=" + recordDetails
				+ ", recordAmount=" + recordAmount + ", remarks=" + remarks + ", paymentMethod=" + paymentMethod
				+ ", categories=" + categories + ", recordCreatedAt=" + recordCreatedAt + "]";
	}
	
	
}
