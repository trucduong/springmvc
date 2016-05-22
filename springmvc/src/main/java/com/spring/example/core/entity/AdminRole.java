package com.spring.example.core.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Dynamic Role list (created base on permissions)
 *
 */
@Entity
@Table(name = "admin_roles")
public class AdminRole extends BaseEntity {

	private static final long serialVersionUID = 7409753212591523466L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	protected int id;
	
	@Column(name = "role_name", length = 100)
	private String name;
	
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

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
}
