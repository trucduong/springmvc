package com.spring.example.admin.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.spring.example.core.dto.AccountDto;
import com.spring.example.core.navigation.NavigationUtils;
import com.spring.example.core.util.ApplicationConstant;
import com.spring.example.core.util.ApplicationUtils;
import com.spring.example.core.util.MessageUtils;
import com.spring.example.core.util.View;

/**
 * Handles requests for the application home page.
 */
@Controller
@RequestMapping(value="/admin")
public class AdminHomeController {
	
	@Autowired
	private Environment env;
	
	@RequestMapping(value="home", method = RequestMethod.GET)
	//@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ModelAndView goToHome(HttpSession session) {
		ModelAndView modelAndView = NavigationUtils.create(View.Admin.HOME_PAGE);
		return modelAndView;
	}

	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public ModelAndView goToLogin(@RequestParam(value = "error", required = false) String error,
            @RequestParam(value = "logout", required = false) String logout, 
            HttpServletRequest request, HttpServletResponse response) {
		ModelAndView mv = NavigationUtils.create(View.Admin.LOGIN_PAGE);
		mv.addObject("account", new AccountDto());
		
		if (error != null) {
			mv.addObject(MessageUtils.ERROR_MSG, env.getProperty("admin.login.error"));
		}

		if (logout != null) {
			mv.addObject(MessageUtils.INFO_MSG, env.getProperty("admin.login.logout"));
		}

		// set locate vi
		ApplicationUtils.setLocate(request, response, ApplicationConstant.LOCATE_VI);
		
		return mv;
	}
}
