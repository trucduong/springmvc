package com.spring.example.core.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * Master data
 *
 */
@Entity
@Table(name = "user_role_permissions")
public class UserRolePermission extends BaseEntity {

	private static final long serialVersionUID = -4862960649929187599L;

	@Column(name = "role_id")
	private int roleId;

	@Column(name = "permission_name", length = 100)
	private String permissionNme;
	
	public UserRolePermission() {
		
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
	
//	public class AdminRolePermissionId implements Serializable { 
//		/**
//		 * 
//		 */
//		private static final long serialVersionUID = 6139361199612176175L;
//		private int roleId;
//		private String permissionNme;
//		public int getRoleId() {
//			return roleId;
//		}
//		public void setRoleId(int roleId) {
//			this.roleId = roleId;
//		}
//		public String getPermissionNme() {
//			return permissionNme;
//		}
//		public void setPermissionNme(String permissionNme) {
//			this.permissionNme = permissionNme;
//		}
//		@Override
//		public boolean equals(Object obj) {
//			if (obj == null || !(obj instanceof AdminRolePermissionId)) {
//				return false;
//			}
//			
//			AdminRolePermissionId objId = (AdminRolePermissionId) obj;
//			return this.roleId == objId.getRoleId() && this.permissionNme.equals(objId.getPermissionNme());
//		}
//		@Override
//		public int hashCode() {
//			return super.hashCode();
//		}
//	}
}
