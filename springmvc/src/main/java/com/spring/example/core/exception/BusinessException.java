package com.spring.example.core.exception;

public class BusinessException extends Exception {
	/**
	 * 
	 */
	private static final long serialVersionUID = 2088924571988527030L;
	private String errCode;
	private String errMsg;

	public String getErrCode() {
		return errCode;
	}

	public void setErrCode(String errCode) {
		this.errCode = errCode;
	}

	public String getErrMsg() {
		return errMsg;
	}

	public void setErrMsg(String errMsg) {
		this.errMsg = errMsg;
	}

	public BusinessException(String errCode, String errMsg) {
		this.errCode = errCode;
		this.errMsg = errMsg;
	}
}
