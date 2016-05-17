package com.spring.example.core.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Id;
import javax.persistence.Table;

import com.spring.example.core.util.AccountStatus;

@Entity
@Table(name = "admin_accounts")
public class AdminAccount extends BaseEntity {

	private static final long serialVersionUID = -61352121879032316L;

	@Id
	@Column(name = "login_name", unique = true, length = 50)
	private String loginName;

	@Column(name = "password", length = 500)
	private String password;

	@Enumerated(EnumType.STRING)
	@Column(name = "status", length = 50)
	private AccountStatus status;

	public AdminAccount() {
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
}
