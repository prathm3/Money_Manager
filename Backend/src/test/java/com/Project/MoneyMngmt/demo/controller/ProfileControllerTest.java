//package com.Project.MoneyMngmt.demo.controller;
//
//import static org.junit.Assert.assertThat;
//import static org.junit.jupiter.api.Assertions.*;
//import static org.mockito.Mockito.when;
//
//import java.util.ArrayList;
//import java.util.Date;
//import java.util.List;
//
//import org.junit.jupiter.api.Test;
//import org.junit.jupiter.api.extension.ExtendWith;
//import org.mockito.InjectMocks;
//import org.mockito.Mock;
//import org.mockito.junit.jupiter.MockitoExtension;
//import org.springframework.http.ResponseEntity;
//
//import com.Project.MoneyMngmt.demo.beans.Profile;
//import com.Project.MoneyMngmt.demo.service.ProfileService;
//
//@ExtendWith(MockitoExtension.class)
//class ProfileControllerTest {
//
//	@InjectMocks
//	private ProfileController controller;
//	
//	@Mock
//	private ProfileService profileService;
//	
//	
//	@Test
//	void getProfilesTest() {
//		List<Profile> list=new ArrayList<>();
//		list.add(new Profile("123b", "Prathmesh","Deshpande", "prathmesh@101gmail.com",new Date(), "India", "Pune","Nice"));
//		list.add(new Profile("133b","Prathmesh","Deshpande", "prathmesh@101gmail.com",new Date(), "India", "Pune","Nice"));
//		list.add(new Profile("143b", "Prathmesh","Deshpande", "prathmesh@101gmail.com",new Date(), "India", "Pune","Nice"));
//		when(profileService.getProfiles()).thenReturn(list);
//		
//		ResponseEntity<?> response = controller.getProfiles();
//		assertEquals(response.getStatusCode(), 200);
//	}
//
//}
