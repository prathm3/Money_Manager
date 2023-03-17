package com.Project.MoneyMngmt.demo.utils;

import java.io.IOException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.sendgrid.Content;
import com.sendgrid.Email;
import com.sendgrid.Mail;
import com.sendgrid.Method;
import com.sendgrid.Request;
import com.sendgrid.Response;
import com.sendgrid.SendGrid;

@Service
public class MailService {
	private static final Logger logger = LoggerFactory.getLogger(MailService.class);
	private static String resetToken; 

	public static String getResetToken() {
		return resetToken;
	}
	public static void setResetToken(String resetToken) {
		MailService.resetToken = resetToken;
	}

	public String sendTextEmail() throws IOException {
		// the sender email should be the same as we used to Create a Single Sender Verification
		    Email from = new Email("prathmeshdeshpande101@gmail.com");
		    String subject = "The subject";
		    Email to = new Email("prathmeshdeshpande101@gmail.com");
		    Content content = new Content("text/plain", "This is a test email with " + resetToken);
		    Mail mail = new Mail(from, subject, to, content);
		
		    SendGrid sg = new SendGrid("SENDGRID_API_KEY");
		    Request request = new Request();
		    try {
		      request.setMethod(Method.POST);
		      request.setEndpoint("mail/send");
		      request.setBody(mail.build());
		      Response response = sg.api(request);
		      logger.info(response.getBody());
		      return response.getBody();	     
		    } catch (IOException ex) {
		      throw ex;
		    }	   
	}
}