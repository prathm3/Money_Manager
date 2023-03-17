package com.Project.MoneyMngmt.demo.dto;

import java.util.Date;

public class RecordRequest {
	/**
	 * private String recordName;
	private String recordDetails;
	private double recordAmount;
	private String remarks;
	private String paymentMethod;
	private String categories;
	private Date recordCreatedAt;
	 */
	private String recordName;
	private String recordDetails;
	private double recordAmount;
	private String remarks;
	private String paymentMethod;
	private String categories;
	private Date recordCreatedAt;
	public RecordRequest() {
		// TODO Auto-generated constructor stub
	}
	public RecordRequest(String recordName, String recordDetails, double recordAmount, String remarks,
			String paymentMethod, String categories, Date recordCreatedAt) {
		super();
		this.recordName = recordName;
		this.recordDetails = recordDetails;
		this.recordAmount = recordAmount;
		this.remarks = remarks;
		this.paymentMethod = paymentMethod;
		this.categories = categories;
		this.recordCreatedAt = recordCreatedAt;
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
		return "RecordRequest [recordName=" + recordName + ", recordDetails=" + recordDetails + ", recordAmount="
				+ recordAmount + ", remarks=" + remarks + ", paymentMethod=" + paymentMethod + ", categories="
				+ categories + ", recordCreatedAt=" + recordCreatedAt + "]";
	}
	
}
