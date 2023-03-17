package com.Project.MoneyMngmt.demo.service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Project.MoneyMngmt.demo.beans.Profile;
import com.Project.MoneyMngmt.demo.beans.Records;
import com.Project.MoneyMngmt.demo.beans.User;
import com.Project.MoneyMngmt.demo.dao.RecordsDao;

@Service
public class RecordsServiceImpl implements RecordsService{

	@Autowired
	private RecordsDao recordsDao;
	
	@Autowired
	private LoginService loginService;
	
	@Autowired
	private ProfileService profileService;

	@Override
	public List<Records> getAllRecords() {
		
		return recordsDao.findAll();
	}

	@Override
	public Records getRecordById(String id) {
		Optional<Records> op = recordsDao.findById(id);
		return op.orElse(null);
	}

	@Override
	public int getCountofRecords() {
		List<Records> rlist = recordsDao.findAll();
		return rlist.size();
	}

	@Override
	public boolean addRecord(String userId, String recordName, String recordDetails, double recordAmount, String remarks,
			String categories, String paymentMethod, Date recordCreatedAt) {
		/**
		 * String recordName, String recordDetails, double recordAmount, String remarks, String paymentMethod,
			String categories, Date recordCreatedAt
		 */
		User user = loginService.findByUserId(userId);
		if(user == null) {
			return false;
		}
		Records record = new Records(recordName, recordDetails, recordAmount, remarks, paymentMethod, categories, recordCreatedAt);
		record.setProfile(user.getProfile());
		recordsDao.save(record);
		return true;
	}

	@Override
	public void updateRecord(String id, String recordName, String recordDetails, double recordAmount, String remarks,
			String categories, String paymentMethod, Date recordCreatedAt) {
		Optional<Records> op = recordsDao.findById(id);
		if(op.isPresent()) {
			Records record = op.get();
			record.setCategories(categories);
			record.setPaymentMethod(paymentMethod);
			record.setRecordCreatedAt(recordCreatedAt);
			record.setRecordAmount(recordAmount);
			record.setRecordDetails(recordDetails);
			record.setRecordName(recordName);
			record.setRemarks(remarks);
			recordsDao.save(record);
		}
		
	}

	@Override
	public void deleteRecord(String id) {
		recordsDao.deleteById(id);
		
	}

	@Override
	public List<Records> getRecordsByProfileId(Profile profile) {
		
		return recordsDao.findByProfile(profile);
	}
	
}
