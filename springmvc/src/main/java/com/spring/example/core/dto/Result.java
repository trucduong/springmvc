package com.spring.example.core.dto;

public class Result {
	private String error;
	private boolean success;
	private Object data;
	private Result() {
		success = true;
	}
	private Result(String error) {
		this.error = error;
		this.success = false;
	}
	public String getError() {
		return error;
	}
	public boolean isSuccess() {
		return success;
	}
	
	public Object getData() {
		return data;
	}
	public Result withData(Object data) {
		this.data = data;
		return this;
	}
	
	public static Result success() {
		return new Result();
	}
	
	public static Result error(String error) {
		return new Result(error);
	}
}
