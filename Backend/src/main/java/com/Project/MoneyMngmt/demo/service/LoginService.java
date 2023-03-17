package com.Project.MoneyMngmt.demo.service;

import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import com.Project.MoneyMngmt.demo.beans.User;

@Service
public interface LoginService extends UserDetailsService{

	//UserDetails loadUserByEmailId(String emailId);

	User findByEmailID(String username);

	void save(User user);

	User findByUserId(String userId);


}
