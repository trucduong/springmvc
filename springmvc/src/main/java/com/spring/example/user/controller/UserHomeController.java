package com.spring.example.user.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.spring.example.core.exception.BusinessException;
import com.spring.example.core.util.View;

/**
 * Handles requests for the application home page.
 */
@Controller
@RequestMapping(value="/")
public class UserHomeController {
	
	@Autowired
	private Environment env;
	
	@RequestMapping(method = RequestMethod.GET)
	//@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ModelAndView goToHome(HttpSession session) {
		ModelAndView modelAndView = new ModelAndView(View.User.HOME_PAGE);
		return modelAndView;
	}
	
	@RequestMapping(value = "exception", method = RequestMethod.GET)
	public ModelAndView exception(Model model) throws Exception {
		throw new Exception("exception");
	}
	
	@RequestMapping(value = "exception1", method = RequestMethod.GET)
	public ModelAndView exception1() throws BusinessException {
		throw new BusinessException("exception_code", "exception message");
	}
}
