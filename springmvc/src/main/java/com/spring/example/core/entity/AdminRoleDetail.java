package com.spring.example.core.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * Master data
 *
 */
@Entity
@Table(name = "role_detail")
public class AdminRoleDetail extends BaseEntity {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Column(name = "role_id")
	private int roleId;
	
	@Column(name = "name", columnDefinition = "NVARCHAR(100)")
	private String name;
	
	@Column( name = "description" , columnDefinition = "TEXT")
	private String description;
	
	@Column(name = "name_display", columnDefinition = "NVARCHAR(200)")
	private String nameDisplay;
	
	public AdminRoleDetail() {
		
	}
	
	public int getRoleId() {
		return roleId;
	}

	public void setRoleId(int roleId) {
		this.roleId = roleId;
	}



	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getNameDisplay() {
		return nameDisplay;
	}

	public void setNameDisplay(String nameDisplay) {
		this.nameDisplay = nameDisplay;
	}
	
	
}
