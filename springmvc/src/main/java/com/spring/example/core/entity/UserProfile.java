package com.spring.example.core.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "user_profiles")
public class UserProfile extends BaseEntity {
	private static final long serialVersionUID = 2214068797533736005L;

	@Column(name = "login_name", unique = true, length = 50)
	private String loginName;

	@Column(name = "full_name", columnDefinition = "NVARCHAR(100)")
	private String fullName;

	@Column(name = "phone", length = 15)
	private String phone;

	@Column(name = "email", length = 100)
	private String email;

	@Column(name = "birth_day")
	private Date birthDay;

	@Column(name = "address", length = 100)
	private String address;

	@Column(name = "manager", length = 50)
	private String manager;

	public UserProfile() {
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

	public Date getBirthDay() {
		return birthDay;
	}

	public void setBirthDay(Date birthDay) {
		this.birthDay = birthDay;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getManager() {
		return manager;
	}

	public void setManager(String manager) {
		this.manager = manager;
	}

}
