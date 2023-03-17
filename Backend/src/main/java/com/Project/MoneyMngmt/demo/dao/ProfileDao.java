package com.Project.MoneyMngmt.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Project.MoneyMngmt.demo.beans.Profile;

@Repository
public interface ProfileDao extends JpaRepository<Profile, String> {

	Profile findByEmailID(String emailId);

}
