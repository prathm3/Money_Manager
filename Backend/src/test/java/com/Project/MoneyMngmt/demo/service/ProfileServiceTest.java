//package com.Project.MoneyMngmt.demo.service;
//
//import static org.junit.Assert.assertEquals;
//import static org.mockito.Mockito.times;
//import static org.mockito.Mockito.verify;
//import static org.mockito.Mockito.when;
//
//import java.util.ArrayList;
//import java.util.Date;
//import java.util.List;
//import java.util.Optional;
//
//import org.junit.jupiter.api.Test;
//import org.junit.runner.RunWith;
//import org.mockito.InjectMocks;
//import org.mockito.Mock;
//import org.mockito.junit.MockitoJUnitRunner;
//
//import com.Project.MoneyMngmt.demo.beans.Profile;
//import com.Project.MoneyMngmt.demo.dao.ProfileDao;
//
//@RunWith(MockitoJUnitRunner.class)
//class ProfileServiceTest {
//
//	@InjectMocks
//	private ProfileService profileService;
//
//	@Mock
//	private ProfileDao profileDao;
//
//	@Test
//	public void getProfilesTest() {
//		/**
//		 * String firstName, String lastName, String emailID,
//		 *  Date dateOfBirth, String country, String city,
//			String bio
//		 */
//		System.out.println("in testGetAll");
//		List<Profile> list=new ArrayList<>();
//		list.add(new Profile("123b", "Prathmesh","Deshpande", "prathmesh@101gmail.com",new Date(), "India", "Pune","Nice"));
//		list.add(new Profile("133b","Prathmesh","Deshpande", "prathmesh@101gmail.com",new Date(), "India", "Pune","Nice"));
//		list.add(new Profile("143b", "Prathmesh","Deshpande", "prathmesh@101gmail.com",new Date(), "India", "Pune","Nice"));
//
//		when(profileDao.findAll()).thenReturn(list);
//
//		List<Profile> list1=profileService.getProfiles();
//		assertEquals(3,list1.size());
//		verify(profileDao,times(1)).findAll();
//	}
//
//	@Test
//	public void getProfileByIdTest() {
//		System.out.println("in testgetbyid");
//		when(profileDao.findById("123b")).thenReturn(Optional.of(new Profile("Prathmesh","Deshpande", "prathmesh@101gmail.com",new Date(), "India", "Pune","Nice")));
//
//		Profile pro=profileService.getProfileById("123b");
//		assertEquals("prathmesh@101gmail.com", pro.getEmailID());
//		assertEquals("Pune", pro.getCity());
//		verify(profileDao,times(1)).findById("123b");
//	}
//	@Test
//	public void getProfileByEmailIdTest() {
//		System.out.println("in testgetbyid");
//		when(profileDao.findByEmailID("123b")).thenReturn(new Profile("Prathmesh","Deshpande", "prathmesh@101gmail.com",new Date(), "India", "Pune","Nice"));
//
//		Profile pro=profileService.getProfileByEmailId("123b");
//		assertEquals("prathmesh@101gmail.com", pro.getEmailID());
//		assertEquals("Pune", pro.getCity());
//		verify(profileDao,times(1)).findById("123b");
//	}
//	@Test
//	public void createProfileTest() {
//		when(profileDao.findById("123b")).thenReturn(Optional.of(new Profile("Prathmesh","Deshpande", "prathmesh@101gmail.com",new Date(), "India", "Pune","Nice")));
//		profileService.createProfile("Prathmesh", "Deshpande", "prathmesh@101gmai.com", new Date(), "india", "Pune", "Nice");
//		verify(profileDao,times(1)).save(new Profile("Prathmesh", "Deshpande", "prathmesh@101gmai.com", new Date(), "india", "Pune", "Nice"));
//	}
//	
//	@Test
//	public void deleteByIdTest() {
//		//Profile pro = new Profile("Prathmesh","Deshpande", "prathmesh@101gmail.com",new Date(), "India", "Pune","Nice");
//		profileService.deleteById("123b");
//		verify(profileDao, times(1)).deleteById("123b");
//	}
//	
//}
