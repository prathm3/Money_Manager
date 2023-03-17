package com.Project.MoneyMngmt.demo.service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Project.MoneyMngmt.demo.beans.Profile;
import com.Project.MoneyMngmt.demo.beans.Expense;
import com.Project.MoneyMngmt.demo.beans.User;
import com.Project.MoneyMngmt.demo.dao.ExpenseDao;

@Service
public class ExpenseServiceImpl implements ExpenseService{

	@Autowired
	private ExpenseDao expenseDao;
	
	@Autowired
	private LoginService loginService;
	
	@Autowired
	private ProfileService profileService;

	@Override
	public List<Expense> getAllExpense() {
		if(expenseDao == null) {
			System.out.println("GET AL<LL IAIDAIDJhas");
		}
		return expenseDao.findAll();
	}

	@Override
	public Expense getExpenseById(String id) {
		
		Optional<Expense> op = expenseDao.findById(id);
		return op.orElse(null);
	}

	@Override
	public int getCountofExpense() {
		List<Expense> rlist = expenseDao.findAll();
		return rlist.size();
	}

	@Override
	public boolean addExpense(String userId, String recordName, String recordDetails, double recordAmount, String remarks,
			String categories, String paymentMethod, Date recordCreatedAt) {
		/**
		 * String recordName, String recordDetails, double recordAmount, String remarks, String paymentMethod,
			String categories, Date recordCreatedAt
		 */
		User user = loginService.findByUserId(userId);
		if(user == null) {
			return false;
		}
		Expense record = new Expense(recordName, recordDetails, recordAmount, remarks, paymentMethod, categories, recordCreatedAt);
		record.setProfile(user.getProfile());
		expenseDao.save(record);
		return true;
	}

	@Override
	public void updateRecord(String id, String recordName, String recordDetails, double recordAmount, String remarks,
			String categories, String paymentMethod, Date recordCreatedAt) {
		Optional<Expense> op = expenseDao.findById(id);
		if(op.isPresent()) {
			Expense record = op.get();
			record.setCategories(categories);
			record.setPaymentMethod(paymentMethod);
			record.setRecordCreatedAt(recordCreatedAt);
			record.setRecordAmount(recordAmount);
			record.setRecordDetails(recordDetails);
			record.setRecordName(recordName);
			record.setRemarks(remarks);
			expenseDao.save(record);
		}
		
	}

	@Override
	public void deleteExpense(String id) {
		expenseDao.deleteById(id);
		
	}

	@Override
	public List<Expense> getExpenseByProfileId(Profile profile) {
		
		return expenseDao.findByProfile(profile);
	}
	
}
