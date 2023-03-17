package com.Project.MoneyMngmt.demo.utils;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.Project.MoneyMngmt.demo.beans.Account;
import com.Project.MoneyMngmt.demo.beans.Address;
import com.Project.MoneyMngmt.demo.beans.Expense;
import com.Project.MoneyMngmt.demo.beans.Item;
import com.Project.MoneyMngmt.demo.beans.Order;
import com.Project.MoneyMngmt.demo.beans.Payment;
import com.Project.MoneyMngmt.demo.beans.Records;
import com.Project.MoneyMngmt.demo.service.ExpenseService;
import com.Project.MoneyMngmt.demo.service.ExpenseServiceImpl;
import com.Project.MoneyMngmt.demo.service.RecordsService;
import com.Project.MoneyMngmt.demo.service.RecordsServiceImpl;

public class OrderHelper {
	
	public  Order getOrder() {
        Order order = new Order();
        
    	RecordsService recordsService = new RecordsServiceImpl();
    	//System.out.println("jssafkbbbd" + expenseService.getCountofExpense());
        //List<Expense> expenses = expenseService.getAllExpense();
       // order.setExpenses(expenses);
        List<Records> records = recordsService.getAllRecords();
        order.setRecords(records);
//        order.setOrderId(1234);
//        order.setDate("2077-09-05");
//        Address address = new Address();
//        address.setCity("New York");
//        address.setStreet("2897  Geneva Street");
//        address.setZipCode("10016");
//        address.setState("New York");
//        Account account = new Account();
//        account.setPhoneNumber("917-483-5146");
//        account.setEmail("628jh4h624y@temporary-mail.net");
//        account.setName("Mr. Eugene A King");
//        account.setAddress(address);
//        order.setAccount(account);
//
//        List<Item> items = new ArrayList<>();
//        order.setItems(items);
//        Item item1 = new Item();
//        item1.setName("Blue T-Shirt");
//        item1.setPrice(BigDecimal.valueOf(9.99));
//        item1.setQuantity(2);
//        item1.setSku("100034");
//        items.add(item1);
//        Item item2 = new Item();
//        item2.setName("Green SweatShirt");
//        item2.setPrice(BigDecimal.valueOf(12.49));
//        item2.setSku("100075");
//        item2.setQuantity(3);
//
//        items.add(item2);
//        Item item3 = new Item();
//        item3.setName("Grey Sports Shoes");
//        item3.setPrice(BigDecimal.valueOf(14.49));
//        item3.setSku("100022");
//        item3.setQuantity(1);
//        items.add(item3);
//
//        Payment payment = new Payment();
//        BigDecimal totalPrice = items.stream().map(item -> item.getPrice().multiply(BigDecimal.valueOf(item.getQuantity()))).reduce(BigDecimal.ZERO, BigDecimal::add);
//        payment.setAmount(totalPrice);
//        payment.setCardNumber("4111111111111111");
//        payment.setCvv("123");
//        payment.setMonth("04");
//        payment.setYear("2030");
//        order.setPayment(payment);
        return order;
    }
}
