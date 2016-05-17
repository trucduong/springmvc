package com.spring.example.core.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

import com.spring.example.core.entity.AdminRolePermission.AdminRolePermissionId;

/**
 * Master data
 *
 */
@Entity
@Table(name = "admin_role_permissions")
@IdClass(AdminRolePermissionId.class)
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
	
	public class AdminRolePermissionId implements Serializable { 
		/**
		 * 
		 */
		private static final long serialVersionUID = 6139361199612176175L;
		private int roleId;
		private String permissionNme;
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
		@Override
		public boolean equals(Object obj) {
			if (obj == null || !(obj instanceof AdminRolePermissionId)) {
				return false;
			}
			
			AdminRolePermissionId objId = (AdminRolePermissionId) obj;
			return this.roleId == objId.getRoleId() && this.permissionNme.equals(objId.getPermissionNme());
		}
		@Override
		public int hashCode() {
			return super.hashCode();
		}
	}
}
