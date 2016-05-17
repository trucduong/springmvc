package com.spring.example.core.dto;

import java.util.Date;
import java.util.HashMap;

import com.spring.example.core.util.ApplicationConstant;

public class MapDto extends HashMap<String, Object>{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public int getInt(String key) {
		return getInt(key, ApplicationConstant.DEFAULT_INT);
	}
	
	public int getInt(String key, int defaultValue) {
		try {
			Integer result = (Integer) this.get(key);
			if (result != null) {
				return result.intValue();
			}
		} catch (Exception e) {	}
		
		return defaultValue;
	}
	
	public String getString(String key) {
		return getString(key, ApplicationConstant.DEFAULT_STRING);
	}
	
	public String getString(String key, String defaultValue) {
		try {
			String result = (String) this.get(key);
			if (result != null) {
				return result;
			}
		} catch (Exception e) {	}
		
		return defaultValue;
	}
	
	public Date getDate(String key) {
		return getDate(key, null);
	}
	
	public Date getDate(String key, Date defaultValue) {
		try {
			Date result = (Date) this.get(key);
			if (result != null) {
				return result;
			}
		} catch (Exception e) {	}
		
		return defaultValue;
	}
}
