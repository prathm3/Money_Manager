package com.Project.MoneyMngmt.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Project.MoneyMngmt.demo.beans.Profile;
import com.Project.MoneyMngmt.demo.beans.Records;

@Repository
public interface RecordsDao extends JpaRepository<Records, String> {


	List<Records> findByProfile(Profile profile);

}
