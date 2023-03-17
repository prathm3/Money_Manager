package com.Project.MoneyMngmt.demo.beans;

import java.util.List;

public class Order {
//	private Integer orderId;
//    private String date;
//    private Account account;
//    private Payment payment;
    private List<Expense> expenses;
    private List<Records> records;
    public Order() {
		// TODO Auto-generated constructor stub
	}
	public List<Expense> getExpenses() {
		return expenses;
	}
	public void setExpenses(List<Expense> expenses) {
		this.expenses = expenses;
	}
	public List<Records> getRecords() {
		return records;
	}
	public void setRecords(List<Records> records) {
		this.records = records;
	}
	@Override
	public String toString() {
		return "Order [expenses=" + expenses + ", records=" + records + "]";
	}
    
//	public Order(Integer orderId, String date, Account account, Payment payment, List<Item> items) {
//		super();
//		this.orderId = orderId;
//		this.date = date;
//		this.account = account;
//		this.payment = payment;
//		this.items = items;
//	}
//	public Integer getOrderId() {
//		return orderId;
//	}
//	public void setOrderId(Integer orderId) {
//		this.orderId = orderId;
//	}
//	public String getDate() {
//		return date;
//	}
//	public void setDate(String date) {
//		this.date = date;
//	}
//	public Account getAccount() {
//		return account;
//	}
//	public void setAccount(Account account) {
//		this.account = account;
//	}
//	public Payment getPayment() {
//		return payment;
//	}
//	public void setPayment(Payment payment) {
//		this.payment = payment;
//	}
//	public List<Item> getItems() {
//		return items;
//	}
//	public void setItems(List<Item> items) {
//		this.items = items;
//	}
//	@Override
//	public String toString() {
//		return "Order [orderId=" + orderId + ", date=" + date + ", account=" + account + ", payment=" + payment
//				+ ", items=" + items + "]";
//	}
//    
}
