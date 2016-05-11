package com.spring.example.core.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * Master data
 *
 */
@Entity
@Table(name = "permission_detail")
public class AdminPermissionDetail extends BaseEntity {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Column(name = "permission_id")
	private int permissionId;

	@Column(name = "role_detail_id")
	private int roleDetailId;

	@Column(name = "login_role_name")
	private String loginRoleName;

	public AdminPermissionDetail() {

	}

	public int getPermissionId() {
		return permissionId;
	}

	public void setPermissionId(int permissionId) {
		this.permissionId = permissionId;
	}

	public int getRoleDetailId() {
		return roleDetailId;
	}

	public void setRoleDetailId(int roleDetailId) {
		this.roleDetailId = roleDetailId;
	}

	public String getLoginRoleName() {
		return loginRoleName;
	}

	public void setLoginRoleName(String loginRoleName) {
		this.loginRoleName = loginRoleName;
	}

}
