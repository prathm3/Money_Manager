//package com.Project.MoneyMngmt.demo.service;
//
//
//import java.time.Instant;
//import java.util.Optional;
//import java.util.UUID;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;
//
//import com.Project.MoneyMngmt.demo.beans.RefreshToken;
//import com.Project.MoneyMngmt.demo.dao.LoginDao;
//import com.Project.MoneyMngmt.demo.dao.RefreshTokenRepository;
//
//@Service
//public class RefreshTokenService {
//  @Value("${bezkoder.app.jwtRefreshExpirationMs}")
//  private Long refreshTokenDurationMs;
//
//  @Autowired
//  private RefreshTokenRepository refreshTokenRepository;
//
//  @Autowired
//  private LoginDao userRepository;
//
//  public Optional<RefreshToken> findByToken(String token) {
//    return refreshTokenRepository.findByToken(token);
//  }
//
//  public RefreshToken createRefreshToken(String userId) {
//    RefreshToken refreshToken = new RefreshToken();
//
//    refreshToken.setUser(userRepository.findByEmailID(userId));
//    refreshToken.setExpiryDate(Instant.now().plusMillis(refreshTokenDurationMs));
//    refreshToken.setToken(UUID.randomUUID().toString());
//
//    refreshToken = refreshTokenRepository.save(refreshToken);
//    return refreshToken;
//  }
//
//  public RefreshToken verifyExpiration(RefreshToken token) {
//    if (token.getExpiryDate().compareTo(Instant.now()) < 0) {
//      refreshTokenRepository.delete(token);
//      throw new com.Project.MoneyMngmt.demo.Exceptions.TokenRefreshException(token.getToken(), "Refresh token was expired. Please make a new signin request");
//    }
//
//    return token;
//  }
//
//  @Transactional
//  public int deleteByUserId(String userId) {
//    return refreshTokenRepository.deleteByUser(userRepository.findByEmailID(userId));
//  }
//}