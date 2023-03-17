package com.Project.MoneyMngmt.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.Project.MoneyMngmt.demo.beans.Expense;
import com.Project.MoneyMngmt.demo.beans.Records;
import com.Project.MoneyMngmt.demo.beans.User;
import com.Project.MoneyMngmt.demo.dto.RecordRequest;
import com.Project.MoneyMngmt.demo.service.ExpenseService;
import com.Project.MoneyMngmt.demo.service.LoginService;
import com.Project.MoneyMngmt.demo.service.RecordsService;

@CrossOrigin(origins = "*")
@RequestMapping("/expense")
@RestController
public class ExpenseController {
	
	@Autowired
	private ExpenseService expenseService;
	
	@Autowired
	private LoginService userLoginService;
	//@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/")
	public ResponseEntity<?> getAllExpense(){
		List<Expense> rlist = expenseService.getAllExpense();
		if(rlist.size() == 0) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
		return ResponseEntity.ok(rlist);
	}
	//@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/{id}")
	public ResponseEntity<?> getRecordById(@PathVariable String id){
		Expense records = expenseService.getExpenseById(id);
		if(records == null) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
		return ResponseEntity.ok(records);
	}
//	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/user/{userId}")
	public ResponseEntity<?> getRecordsByUser(@PathVariable String userId){
		User user = userLoginService.findByUserId(userId);
		List<Expense> rlist = expenseService.getExpenseByProfileId(user.getProfile());
		if(rlist.size() == 0) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
		return ResponseEntity.ok(rlist);
	}
	//@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/count")
	public ResponseEntity<?> getCountofExpense(){
		int count = expenseService.getCountofExpense();
		if(count == 0) {
			return new ResponseEntity("No records available", HttpStatus.NO_CONTENT);
		}
		return ResponseEntity.ok(count);
	}
	//@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/user/{userId}")
	public ResponseEntity<?> addExpense(@PathVariable String userId, @RequestBody RecordRequest recordRequest){
		System.out.println(userId);
		boolean status = expenseService.addExpense(userId, recordRequest.getRecordName(), recordRequest.getRecordDetails(), recordRequest.getRecordAmount(), recordRequest.getRemarks(), recordRequest.getCategories(), recordRequest.getPaymentMethod(), recordRequest.getRecordCreatedAt());
		if(!status) {
			return new ResponseEntity("Record Not Added", HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity("Record Added Successfully", HttpStatus.CREATED);
	}
//	@CrossOrigin(origins = "http://localhost:3000")
	@PatchMapping("/{id}")
	public ResponseEntity<?> updateExpense(@PathVariable String id, @RequestBody RecordRequest recordRequest){
		Expense record = expenseService.getExpenseById(id);
		if(record == null) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
		expenseService.updateRecord(id, recordRequest.getRecordName(), recordRequest.getRecordDetails(), recordRequest.getRecordAmount(), recordRequest.getRemarks(), recordRequest.getCategories(), recordRequest.getPaymentMethod(), recordRequest.getRecordCreatedAt());
		return new ResponseEntity("Record Updated SuccessFully", HttpStatus.ACCEPTED);
	}
	//@CrossOrigin(origins = "http://localhost:3000")
	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteExpense(@PathVariable String id){
		Expense record = expenseService.getExpenseById(id);
		if(record == null) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
		expenseService.deleteExpense(id);
		return new ResponseEntity("Deleted Record Successfully", HttpStatus.ACCEPTED);
	}
}
