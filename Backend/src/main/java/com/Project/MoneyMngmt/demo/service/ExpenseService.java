package com.Project.MoneyMngmt.demo.service;

import java.util.Date;
import java.util.List;

import com.Project.MoneyMngmt.demo.beans.Profile;
import com.Project.MoneyMngmt.demo.beans.Expense;

public interface ExpenseService {

	List<Expense> getAllExpense();

	Expense getExpenseById(String id);

	int getCountofExpense();

	boolean addExpense(String userId, String expenseName, String expenseDetails, double expenseAmount, String remarks, String categories,
			String paymentMethod, Date expenseCreatedAt);

	void updateRecord(String id, String expenseName, String expenseDetails, double expenseAmount, String remarks,
			String categories, String paymentMethod, Date expenseCreatedAt);

	void deleteExpense(String id);

	List<Expense> getExpenseByProfileId(Profile profile);

}
