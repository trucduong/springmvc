package com.spring.example.core.util;

public class View {
	
	public static final String ERROR_PAGE = "error";
	
	public class Admin {
		public static final String LOGIN_PAGE = "admin-login";
		public static final String HOME_PAGE = "admin-home";
		public static final String ERROR_PAGE = "admin-error";
		
		public static final String HOME_PAGE_URL = "/admin/home";
	}
	
	public class User {
		public static final String HOME_PAGE = "user-home";
		
		public static final String HOME_PAGE_URL = "/";
	}
	
	public class Shop {
		public static final String HOME_PAGE = "shop-home";
		
		public static final String HOME_PAGE_URL = "/shop";
	}

	public static boolean isAdmin() {
		String servletPath = CurrentContext.getServletPath();
		return servletPath != null && servletPath.startsWith("admin");
	}
	
	public static boolean isUser() {
		return !isAdmin() && !isShop();
	}
	
	public static boolean isShop() {
		String servletPath = CurrentContext.getServletPath();
		return servletPath != null && servletPath.startsWith("shop");
	}
}
