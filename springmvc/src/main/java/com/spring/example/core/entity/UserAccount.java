package com.spring.example.core.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;

import com.spring.example.core.util.AccountStatus;
import com.spring.example.core.util.AccountType;

@Entity
@Table(name = "user_accounts")
public class UserAccount extends BaseEntity {

	private static final long serialVersionUID = -61352121879032316L;
	public static final String LOGIN_NAME = "login_name";

	@Column(name = "login_name", unique = true, length = 50)
	private String loginName;

	@Column(name = "password", length = 500)
	private String password;

	@Enumerated(EnumType.STRING)
	@Column(name = "status", length = 50)
	private AccountStatus status;
	
	@Enumerated(EnumType.STRING)
	@Column(name = "account_type", length = 50)
	private AccountType accountType;

	public UserAccount() {
	}

	public String getLoginName() {
		return loginName;
	}

	public void setLoginName(String loginName) {
		this.loginName = loginName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public AccountStatus getStatus() {
		return status;
	}

	public void setStatus(AccountStatus status) {
		this.status = status;
	}

	public AccountType getAccountType() {
		return accountType;
	}

	public void setAccountType(AccountType accountType) {
		this.accountType = accountType;
	}
}
