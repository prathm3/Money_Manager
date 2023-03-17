package com.Project.MoneyMngmt.demo.beans;

import java.math.BigDecimal;

public class Payment {
	 private BigDecimal amount;
	    private String cardNumber;
	    private String cvv;
	    private String month;
	    private String year;
	    public Payment() {
			// TODO Auto-generated constructor stub
		}
		public Payment(BigDecimal amount, String cardNumber, String cvv, String month, String year) {
			super();
			this.amount = amount;
			this.cardNumber = cardNumber;
			this.cvv = cvv;
			this.month = month;
			this.year = year;
		}
		public BigDecimal getAmount() {
			return amount;
		}
		public void setAmount(BigDecimal amount) {
			this.amount = amount;
		}
		public String getCardNumber() {
			return cardNumber;
		}
		public void setCardNumber(String cardNumber) {
			this.cardNumber = cardNumber;
		}
		public String getCvv() {
			return cvv;
		}
		public void setCvv(String cvv) {
			this.cvv = cvv;
		}
		public String getMonth() {
			return month;
		}
		public void setMonth(String month) {
			this.month = month;
		}
		public String getYear() {
			return year;
		}
		public void setYear(String year) {
			this.year = year;
		}
		@Override
		public String toString() {
			return "Payment [cardNumber=" + cardNumber + ", cvv=" + cvv + ", month=" + month + ", year=" + year + "]";
		}
	    
}
