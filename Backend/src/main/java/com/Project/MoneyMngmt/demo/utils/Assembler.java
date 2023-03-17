package com.Project.MoneyMngmt.demo.utils;

import java.util.ArrayList;
import java.util.Collection;

import javax.transaction.Transactional;

import org.apache.tomcat.util.descriptor.web.SecurityRoleRef;
import org.springframework.stereotype.Service;

import com.Project.MoneyMngmt.demo.beans.User;

@Service("assembler")
public class Assembler {

	@Transactional()
	public User buildUserFromUserEntity(User userEntity) {

		String username = userEntity.getEmailID();

		String password = userEntity.getPassword();

		boolean enabled = true;

		boolean accountNonExpired = true;

		boolean credentialsNonExpired = true;

		boolean accountNonLocked = true;

		Collection authorities = new ArrayList();


//		User user = new User(username, password, enabled,
//
//				accountNonExpired, credentialsNonExpired, accountNonLocked, authorities);

		return null;

	}

}