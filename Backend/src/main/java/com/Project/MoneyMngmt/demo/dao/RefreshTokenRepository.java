//package com.Project.MoneyMngmt.demo.dao;
//
//import java.util.Optional;
//
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Modifying;
//import org.springframework.stereotype.Repository;
//
//import com.Project.MoneyMngmt.demo.beans.RefreshToken;
//import com.Project.MoneyMngmt.demo.beans.User;
//
//
//@Repository
//public interface RefreshTokenRepository extends JpaRepository<RefreshToken, Long> {
//  Optional<RefreshToken> findByToken(String token);
//
//  @Modifying
//  int deleteByUser(User user);
//}
