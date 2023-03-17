package com.Project.MoneyMngmt.demo.service;

import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.Project.MoneyMngmt.demo.beans.Profile;

@Service
public interface ProfileService {

	Profile getProfileById(String id);

	void deleteById(String pid);

	List<Profile> getProfiles();

	void updateProfle(String pid, String firstName, String lastName, String emailId, Date dob, String country, String city, String bio);

	Profile getProfileByEmailId(String emailId);

	void createProfile(String firstName, String lastName, String emailId, Date dob, String country, String city,
			String bio);

	void save(Profile profile);

}
