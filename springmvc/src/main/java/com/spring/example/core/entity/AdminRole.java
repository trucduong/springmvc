package com.spring.example.core.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * Master data
 *
 */
@Entity
@Table(name = "role")
public class AdminRole extends BaseEntity {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Column(name = "name", length = 100)
	private String name;
	
	@Column(name = "name_display", columnDefinition = "NVARCHAR(100)")
	private String nameDisplay;
	
	@Column( name = "description" , columnDefinition = "TEXT")
	private String description;
	
	public AdminRole() {
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
