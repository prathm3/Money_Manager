package com.Project.MoneyMngmt.demo.service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Project.MoneyMngmt.demo.beans.Profile;
import com.Project.MoneyMngmt.demo.dao.ProfileDao;

@Service
public class ProfileServiceImpl implements ProfileService{

	@Autowired
	private ProfileDao profileDao;
	@Override
	public Profile getProfileById(String id) {
		
		Optional<Profile> op = profileDao.findById(id);
		return op.orElse(null);
	}
	@Override
	public void deleteById(String pid) {
		
		profileDao.deleteById(pid);
	}
	@Override
	public List<Profile> getProfiles() {
		
		return profileDao.findAll();
	}
	@Override
	public void updateProfle(String pid, String firstName, String lastName, String emailId, Date dob, String country,
			String city, String bio) {
		Optional<Profile> op = profileDao.findById(pid);
		if(op.isPresent()) {
			Profile p = op.get();
			p.setBio(bio);
			p.setCity(city);
			p.setCountry(country);
			p.setFirstName(firstName);
			p.setLastName(lastName);
			p.setDateOfBirth(dob);
			profileDao.save(p);
		}
		
	}
	@Override
	public Profile getProfileByEmailId(String emailId) {
		
		return profileDao.findByEmailID(emailId);
	}
	@Override
	public void createProfile(String firstName, String lastName, String emailId, Date dob, String country, String city,
			String bio) {
		Profile p = new Profile(firstName,lastName, emailId, dob, country, city, bio);
		profileDao.save(p);
	}
	@Override
	public void save(Profile profile) {
		// TODO Auto-generated method stub
		profileDao.save(profile);
	}
	

}
