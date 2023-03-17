package com.Project.MoneyMngmt.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Project.MoneyMngmt.demo.beans.Profile;
import com.Project.MoneyMngmt.demo.beans.Expense;

@Repository
public interface ExpenseDao extends JpaRepository<Expense, String> {


	List<Expense> findByProfile(Profile profile);

}
