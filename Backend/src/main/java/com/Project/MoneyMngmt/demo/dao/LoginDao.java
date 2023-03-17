package com.Project.MoneyMngmt.demo.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Repository;

import com.Project.MoneyMngmt.demo.beans.User;

@Repository
public interface LoginDao extends JpaRepository<User, String> {

	User findByEmailID(String username);

}
