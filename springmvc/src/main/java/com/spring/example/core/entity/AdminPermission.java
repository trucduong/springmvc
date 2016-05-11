package com.spring.example.core.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * Master data
 *
 */
@Entity
@Table(name = "permission")
public class AdminPermission extends BaseEntity {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Column(name = "name", columnDefinition = "NVARCHAR(100)")
	private String name;
	
	@Column( name = "description" , columnDefinition = "TEXT")
	private String description;
	
	public AdminPermission() {
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
}
