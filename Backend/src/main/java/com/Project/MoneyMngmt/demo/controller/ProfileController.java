package com.Project.MoneyMngmt.demo.controller;

import java.util.Date;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.Project.MoneyMngmt.demo.beans.Profile;
import com.Project.MoneyMngmt.demo.beans.Records;
import com.Project.MoneyMngmt.demo.beans.User;
import com.Project.MoneyMngmt.demo.dto.ProfileRequest;
import com.Project.MoneyMngmt.demo.service.LoginService;
import com.Project.MoneyMngmt.demo.service.ProfileService;

@CrossOrigin(origins = "*")
@RestController
public class ProfileController {
	
	@Autowired
	private ProfileService profileService;
	
	@Autowired
	private LoginService userLoginService;
	
	//@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/profiles/{id}")
	public ResponseEntity<?> getProfile(@PathVariable String id){
		Profile profile = profileService.getProfileById(id);
		if(profile == null) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
		return ResponseEntity.ok(profile);
	}
	//@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/profiles")
	public ResponseEntity<?> getProfiles(){
		List<Profile> plist = profileService.getProfiles();
		if(plist.size() == 0) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
		return ResponseEntity.ok(plist);
	}
	@GetMapping("/profiles/user/{userId}")
	public ResponseEntity<?> getProfileByUser(@PathVariable String userId){
		User user = userLoginService.findByUserId(userId);
		if(user == null) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
		return ResponseEntity.ok(user.getProfile());
	}
	@PatchMapping("/profiles/user/{userId}")
	public ResponseEntity<?> updateProfileByUser(@PathVariable String userId, @RequestBody ProfileRequest profile){
		User user = userLoginService.findByUserId(userId);
		if(user == null) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
		profileService.updateProfle(user.getProfile().getProfileId(),profile.getFirstName(), profile.getLastName(), profile.getEmailId(), profile.getDob(), profile.getCountry(), profile.getCity(), profile.getBio());
		return new ResponseEntity("Updated Successfully", HttpStatus.ACCEPTED);
	}
	//@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/profiles")
	public ResponseEntity<?> createProfile(@RequestBody ProfileRequest profile/*@RequestParam String firstName, @RequestParam String lastName, @RequestParam String bio, @RequestParam String emailId, @RequestParam String city, @RequestParam String country, @RequestParam Date dob*/){
		System.out.println(profile.getEmailId());
		Profile p =  profileService.getProfileByEmailId(profile.getEmailId());
		if(p != null) {
			return new ResponseEntity("Already Existed EmailID", HttpStatus.BAD_REQUEST);
		}
		//need to be geneated 
		profileService.createProfile(profile.getFirstName(), profile.getLastName(), profile.getEmailId(), profile.getDob(), profile.getCountry(), profile.getCity(), profile.getBio());
		return new ResponseEntity("Updated Successfully", HttpStatus.ACCEPTED);
	}
	//@CrossOrigin(origins = "http://localhost:3000")
	@DeleteMapping("/profiles/{pid}")
	public ResponseEntity<String> deleteProfiles(@PathVariable String pid){
		Profile p =  profileService.getProfileById(pid);
		if(p == null) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
		profileService.deleteById(pid);
		return new ResponseEntity("Deleted Successfully", HttpStatus.ACCEPTED);
	}
	//@CrossOrigin(origins = "http://localhost:3000")
	@PatchMapping("/profiles/{pid}")
	public ResponseEntity<?> updateProfile(@PathVariable String pid, @RequestBody ProfileRequest profile){
		Profile p =  profileService.getProfileById(pid);
		if(p == null) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
		profileService.updateProfle(pid, profile.getFirstName(), profile.getLastName(), profile.getEmailId(), profile.getDob(), profile.getCountry(), profile.getCity(), profile.getBio());
		return new ResponseEntity("Updated Successfully", HttpStatus.ACCEPTED);
	}
	
	
}
