package com.Project.MoneyMngmt.demo.service;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.Project.MoneyMngmt.demo.beans.User;
import com.Project.MoneyMngmt.demo.dao.LoginDao;
import com.Project.MoneyMngmt.demo.utils.Assembler;

@Service
public class LoginServiceImpl implements LoginService, UserDetailsService{
	
	@Autowired
	private LoginDao loginDao;
	
	 
	@Autowired
	private Assembler assembler;

	//@Override
	//public UserDetails loadUserByEmailId(String emailID) {
		// TODO Auto-generated method stub
	//	return loginDao.loadUserByEmailID(emailID);
	//}

	@Override
	public User findByEmailID(String username) {
		
		return loginDao.findByEmailID(username);
	}
	
	@Override
	public void save(User user) {
		
		loginDao.save(user);
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = loginDao.findByEmailID(username);

	        return new org.springframework.security.core.userdetails.User(user.getEmailID(), user.getPassword(), new ArrayList<>());
		//return null;
	}

	@Override
	public User findByUserId(String userId) {
		System.out.println(userId);
		Optional<User> op = loginDao.findById(userId);
		if(!op.isPresent()) {
			System.out.println("op.get()");
		}
		return op.orElse(null);
	}


//	@Override
//	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//		UserDetails userDetails = null;
//		 
//		User user = loginDao.findByEmailID(username);
//		 
//		if (user == null) {
//			throw new UsernameNotFoundException("user not found");
//		}
//		 
//		return (UserDetails) user;
//	}


}
