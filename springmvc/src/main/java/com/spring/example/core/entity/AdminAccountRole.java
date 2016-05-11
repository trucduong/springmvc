package com.spring.example.core.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Use only one of AdminAccountRole or AdminAccountPermission not both
 * @author trucduong
 *
 */
@Entity
@Table(name = "admin_account_roles")
public class AdminAccountRole extends BaseEntity {

	private static final long serialVersionUID = -9018327487254464298L;

	@Id
	@Column(name = "login_name", unique=true ,length = 50)
	private String loginName;

	@Id
	@Column(name = "role_id")
	private int roleId;

	public AdminAccountRole() {
	}

	public String getLoginName() {
		return loginName;
	}

	public void setLoginName(String loginName) {
		this.loginName = loginName;
	}

	public int getRoleId() {
		return roleId;
	}

	public void setRoleId(int roleId) {
		this.roleId = roleId;
	}
}
