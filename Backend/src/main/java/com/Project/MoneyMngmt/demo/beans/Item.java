package com.Project.MoneyMngmt.demo.beans;

import java.math.BigDecimal;

public class Item {
	 private String sku;
	    private String name;
	    private Integer quantity;
	    private BigDecimal price;
		public Item(String sku, String name, Integer quantity, BigDecimal price) {
			super();
			this.sku = sku;
			this.name = name;
			this.quantity = quantity;
			this.price = price;
		}
		public Item() {
			super();
		}
		public String getSku() {
			return sku;
		}
		public void setSku(String sku) {
			this.sku = sku;
		}
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public Integer getQuantity() {
			return quantity;
		}
		public void setQuantity(Integer quantity) {
			this.quantity = quantity;
		}
		public BigDecimal getPrice() {
			return price;
		}
		public void setPrice(BigDecimal price) {
			this.price = price;
		}
		@Override
		public String toString() {
			return "Item [sku=" + sku + ", name=" + name + ", quantity=" + quantity + ", price=" + price + "]";
		}
	    
}
