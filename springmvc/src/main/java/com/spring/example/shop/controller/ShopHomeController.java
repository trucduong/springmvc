package com.spring.example.shop.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.spring.example.core.util.View;

/**
 * Handles requests for the application home page.
 */
@Controller
@RequestMapping(value="/shop")
public class ShopHomeController {
	
	@Autowired
	private Environment env;
	
	@RequestMapping(method = RequestMethod.GET)
	//@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ModelAndView goToHome(HttpSession session) {
		ModelAndView modelAndView = new ModelAndView(View.Shop.HOME_PAGE);
		return modelAndView;
	}
}
