package com.spring.example.core.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
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
	
	public static final String ROLE_ID = "role_id";
	public static final String LOGIN_NAME = "login_name";

	@Column(name = "login_name", unique=true ,length = 50)
	private String loginName;

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
//	
//	public class AdminAccountRoleId implements Serializable {
//		/**
//		 * 
//		 */
//		private static final long serialVersionUID = 8481632876428546556L;
//		private String loginName;
//		private int roleId;
//		public String getLoginName() {
//			return loginName;
//		}
//		public void setLoginName(String loginName) {
//			this.loginName = loginName;
//		}
//		public int getRoleId() {
//			return roleId;
//		}
//		public void setRoleId(int roleId) {
//			this.roleId = roleId;
//		}
//		
//		@Override
//		public boolean equals(Object obj) {
//			if (obj == null || !(obj instanceof AdminAccountRoleId)) {
//				return false;
//			}
//			
//			AdminAccountRoleId objId = (AdminAccountRoleId) obj;
//			return this.roleId == objId.getRoleId() && this.loginName.equals(objId.getLoginName());
//		}
//		
//		@Override
//		public int hashCode() {
//			// TODO Auto-generated method stub
//			return super.hashCode();
//		}
//	}
}
