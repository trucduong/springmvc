package com.spring.example.core.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "admin_account")
public class AdminAccount extends BaseEntity {
	private static final long serialVersionUID = -61352121879032316L;

	@Column(name = "login_name", unique=true ,length = 50)
	private String loginName;
	@Column(name = "password", length = 500)
	private String password;
	@Column(name = "status")
	private int status;

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
	
	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

}
