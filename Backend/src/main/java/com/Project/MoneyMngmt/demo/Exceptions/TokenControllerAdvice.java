package com.Project.MoneyMngmt.demo.Exceptions;


import java.util.Date;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;



@RestControllerAdvice
public class TokenControllerAdvice {

  @ExceptionHandler(value = TokenRefreshException.class)
  @ResponseStatus(HttpStatus.FORBIDDEN)
  public ResponseEntity<?> handleTokenRefreshException(TokenRefreshException ex, WebRequest request) {
    return new ResponseEntity("Forbidden", HttpStatus.FORBIDDEN);
  }
}