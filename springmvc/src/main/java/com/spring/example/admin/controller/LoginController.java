package com.spring.example.admin.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.spring.example.core.dto.AccountDto;
import com.spring.example.core.service.AccountService;
import com.spring.example.core.util.Views;

@Controller(value="admin")
public class LoginController {
	@Autowired
	private AccountService accountService;

	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public ModelAndView goToLogin() {
		ModelAndView mv = new ModelAndView(Views.Admin.LOGIN_PAGE);
		mv.addObject("account", new AccountDto());
		return mv;
	}

	@RequestMapping(value= "/home", method = RequestMethod.GET)
	public ModelAndView goToHome(HttpSession session) {
		ModelAndView modelAndView = new ModelAndView(Views.Admin.HOME_PAGE);
		return modelAndView;
	}
}
