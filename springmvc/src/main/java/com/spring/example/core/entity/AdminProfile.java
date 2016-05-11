package com.spring.example.core.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "admin_profiles")
public class AdminProfile extends BaseEntity {
	private static final long serialVersionUID = 2214068797533736005L;
	
	@Id
	@Column(name = "login_name", unique=true ,length = 50)
	private String loginName;
	@Column(name = "full_name", columnDefinition = "NVARCHAR(100)")
	private String fullName;
	@Column(name = "phone", length = 15)
	private String phone;
	@Column(name = "email", length = 100)
	private String email;

	public AdminProfile() {
	}

	public String getLoginName() {
		return loginName;
	}

	public void setLoginName(String loginName) {
		this.loginName = loginName;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
}
