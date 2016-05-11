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
@Table(name = "admin_account_permissions")
public class AdminAccountPermission extends BaseEntity {

	private static final long serialVersionUID = -1624474693065292012L;

	@Id
	@Column(name = "login_name", unique=true ,length = 50)
	private String loginName;

	@Id
	@Column(name = "permission_name")
	private String permissionName;

	public AdminAccountPermission() {
	}

	public String getLoginName() {
		return loginName;
	}

	public void setLoginName(String loginName) {
		this.loginName = loginName;
	}

	public String getPermissionName() {
		return permissionName;
	}

	public void setPermissionName(String permissionName) {
		this.permissionName = permissionName;
	}
}
