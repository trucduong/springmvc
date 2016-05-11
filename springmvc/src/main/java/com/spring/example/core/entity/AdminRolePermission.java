package com.spring.example.core.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Master data
 *
 */
@Entity
@Table(name = "admin_role_permissions")
public class AdminRolePermission extends BaseEntity {

	private static final long serialVersionUID = -4862960649929187599L;

	@Id
	@Column(name = "role_id")
	private int roleId;
	
	@Id
	@Column(name = "permission_name", length = 100)
	private String permissionNme;
	
	public AdminRolePermission() {
		
	}

	public int getRoleId() {
		return roleId;
	}

	public void setRoleId(int roleId) {
		this.roleId = roleId;
	}

	public String getPermissionNme() {
		return permissionNme;
	}

	public void setPermissionNme(String permissionNme) {
		this.permissionNme = permissionNme;
	}
}
