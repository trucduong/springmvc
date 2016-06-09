package com.spring.example.core.exception;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.ModelAndView;

import com.spring.example.core.navigation.NavigationUtils;
import com.spring.example.core.util.ErrorCode;
import com.spring.example.core.util.MessageUtils;
import com.spring.example.core.util.View;

@ControllerAdvice
public class GlobalExceptionController {

	@Autowired
	private Environment env;

	@ExceptionHandler(BusinessException.class)
	public ModelAndView handleCustomException(BusinessException ex) {

		ModelAndView model = NavigationUtils.create(View.ERROR_PAGE);
		model.addObject(MessageUtils.MSG_CODE, ex.getErrCode());
		model.addObject(MessageUtils.ERROR_MSG, env.getProperty(ex.getErrCode()));

		return model;

	}

	@ExceptionHandler(Exception.class)
	public ModelAndView handleAllException(Exception ex) {

		ModelAndView model = NavigationUtils.create(View.ERROR_PAGE);
		model.addObject(MessageUtils.MSG_CODE, ErrorCode.UNKNOWN);
		model.addObject(MessageUtils.ERROR_MSG, env.getProperty(ErrorCode.UNKNOWN));

		return model;

	}
}
