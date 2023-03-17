package com.Project.MoneyMngmt.demo.service;

import java.util.Date;
import java.util.List;

import com.Project.MoneyMngmt.demo.beans.Profile;
import com.Project.MoneyMngmt.demo.beans.Records;

public interface RecordsService {

	List<Records> getAllRecords();

	Records getRecordById(String id);

	int getCountofRecords();

	boolean addRecord(String userId, String recordName, String recordDetails, double recordAmount, String remarks, String categories,
			String paymentMethod, Date recordCreatedAt);

	void updateRecord(String id, String recordName, String recordDetails, double recordAmount, String remarks,
			String categories, String paymentMethod, Date recordCreatedAt);

	void deleteRecord(String id);

	List<Records> getRecordsByProfileId(Profile profile);

}
