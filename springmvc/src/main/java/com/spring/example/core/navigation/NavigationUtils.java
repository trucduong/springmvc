package com.spring.example.core.navigation;

import org.springframework.web.servlet.ModelAndView;

public class NavigationUtils {

	public static ModelAndView create(String viewName) {

		return new ModelAndView(viewName);
	}

	public static ModelAndView redirect(String url) {
		return new ModelAndView();
	}
}
